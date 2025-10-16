import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Task {
  id?: number;
  title: string;
  description: string;
  createdAt?: Date;  
}