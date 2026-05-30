import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CONTACT, SERVICES } from '../../shared/site-data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = inject(FormBuilder);

  protected readonly contact = CONTACT;
  protected readonly serviceOptions = SERVICES.map((s) => s.title);
  protected readonly submitted = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.pattern(/^[+()\d\s-]{7,20}$/)]],
    service: [''],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  /** True once a field has been touched/dirtied and is invalid. */
  protected showError(controlName: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.touched || control.dirty);
  }

  protected onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // No backend yet — this is a front-end-only profile site. When an API or
    // email service is added, POST `this.form.getRawValue()` here.
    this.submitted.set(true);
    this.form.reset();
  }

  protected resetSubmission(): void {
    this.submitted.set(false);
  }
}
