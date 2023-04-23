import SubmitForm from "../src/pages/apps/home/Home";
import "@testing-library/jest-dom";
import React from 'react';
import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import VehicleInformationForm from "../src/pages/apps/submit-reports/VehicleInformationForm";
import { useForm, useFormContext } from "react-hook-form";
import { act } from "react-dom/test-utils";

describe('Home component: Submit Damage Report Button', () => {
    test('clicking the Submit Damage Report button displays the correct link', () => {
        render(<SubmitForm />);
        const link = screen.getByRole('link', { name: "Submit Damage Report" });
        expect(link.getAttribute('href')).toBe('/apps/submit-reports/SubmitForm');
    });
});

describe('Home component: View Reports Button', () => {
    test('clicking the View Reports button displays the correct link', () => {
        render(<SubmitForm />);
        const link = screen.getByRole('link', { name: "View Reports" });
        expect(link.getAttribute('href')).toBe('/apps/view-reports/ViewReports');
    });
});

describe('SubmitForm', () => {
    it('Submits the form correctly', async () => {
      const mockSubmitResponse = { uuid: 'abc123' };
      const mockUploadResponse = { uuid: 'def456' };
  
      // Mock the fetch function to return mock responses
      global.fetch = jest.fn();
      fetch.mockImplementation((url, options) => {
        if (url === 'src/pages/api/submit') {
          return Promise.resolve({
            json: () => Promise.resolve(mockSubmitResponse),
          });
        } else if (url === 'src/pages/api/upload') {
          return Promise.resolve({
            json: () => Promise.resolve(mockUploadResponse),
          });
        }
      });
  
      render(<SubmitForm />);
    });
  });

  describe('VehicleInformationForm', () => {
    test('should validate the "vehicleBrand" field when valid input is provided', async () => {
      const { result } = renderHook(() => useForm());
      const methods = result.current;
      const { control, formState } = methods;
      const { errors } = formState;
  
      await act(async () => {
        render(
          <VehicleInformationForm control={control} errors={errors} />
        );
      });
  
      const vehicleBrandField = screen.getByRole('textbox', { name: "Brand of Vehicle" });
      fireEvent.change(vehicleBrandField, { target: { value: 'Car' } });
      expect(vehicleBrandField).toHaveValue('Car');
      expect(screen.queryByText('This field is required.')).not.toBeInTheDocument();

      const vechicleModelField = screen.getByRole('textbox', { name: "Vehicle Model" });
      fireEvent.change(vechicleModelField, { target: { value: 'Toyota Corolla' } });
      expect(vechicleModelField).toHaveValue('Toyota Corolla');
      expect(screen.queryByText('This field is required.')).not.toBeInTheDocument();

      const damageDateField = screen.getByRole('textbox', { name: "Date of Damage" });
      fireEvent.change(damageDateField, { target: { value: '12/04/2023' } });
      expect(damageDateField).toHaveValue('12/04/2023');
      expect(screen.queryByText('This field is required.')).not.toBeInTheDocument();

      const damageLocationField = screen.getByRole('textbox', { name: "Location of Damage" });
      fireEvent.change(damageLocationField, { target: { value: 'Colombo 7' } });
      expect(damageLocationField).toHaveValue('Colombo 7');
      expect(screen.queryByText('This field is required.')).not.toBeInTheDocument();

      const licenseNoField = screen.getByRole('textbox', { name: "Vehicle License Number" });
      fireEvent.change(licenseNoField, { target: { value: '1QAAZ2WSX' } });
      expect(licenseNoField).toHaveValue('1QAAZ2WSX');
      expect(screen.queryByText('This field is required.')).not.toBeInTheDocument();

    });
  });