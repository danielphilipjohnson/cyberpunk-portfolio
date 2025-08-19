// Type definitions for Cyberpunk UI Design System

export type CyberpunkColorScheme = 
  | 'cyan' 
  | 'purple' 
  | 'pink' 
  | 'green' 
  | 'yellow' 
  | 'blue' 
  | 'red' 
  | 'orange'
  | 'lime'
  | 'teal';

export type CyberpunkVariant = 
  | 'primary' 
  | 'secondary' 
  | 'ghost' 
  | 'outline' 
  | 'danger' 
  | 'warning' 
  | 'success';

export type CyberpunkSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ClipPathVariant = 
  | 'straight'
  | 'bottom-right-cut' 
  | 'top-left-cut'
  | 'angled-corner'
  | 'double-cut'
  | 'hex-corner';

export type BorderWidth = 'thin' | 'medium' | 'thick';

export interface CyberpunkBaseProps {
  className?: string;
  colorScheme?: CyberpunkColorScheme;
  variant?: CyberpunkVariant;
  size?: CyberpunkSize;
  disabled?: boolean;
  loading?: boolean;
  glowEffect?: boolean;
  scanningEffect?: boolean;
  clipPath?: ClipPathVariant;
  borderWidth?: BorderWidth;
}

// Button specific props
export interface CyberpunkButtonProps extends CyberpunkBaseProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  neuralText?: boolean;
}

// Input specific props
export interface CyberpunkInputProps extends CyberpunkBaseProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  name?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  required?: boolean;
  readOnly?: boolean;
  autoComplete?: string;
  label?: string;
  neuralLabel?: string;
  error?: string;
  hint?: string;
}

// Textarea specific props
export interface CyberpunkTextAreaProps extends Omit<CyberpunkInputProps, 'type'> {
  rows?: number;
  cols?: number;
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

// Card specific props
export interface CyberpunkCardProps extends CyberpunkBaseProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  withAccent?: boolean;
  padding?: CyberpunkSize;
  hoverable?: boolean;
  clickable?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

// Badge specific props
export interface CyberpunkBadgeProps extends CyberpunkBaseProps {
  children: React.ReactNode;
  dot?: boolean;
  count?: number;
  showZero?: boolean;
  status?: 'active' | 'processing' | 'default' | 'error' | 'warning' | 'success';
}

// Effect specific props
export interface ScanningEffectProps {
  className?: string;
  color?: CyberpunkColorScheme;
  duration?: number;
  direction?: 'horizontal' | 'vertical';
  opacity?: number;
  active?: boolean;
}

export interface CornerDecorationsProps {
  className?: string;
  color?: CyberpunkColorScheme;
  size?: 'sm' | 'md' | 'lg';
  opacity?: number;
  style?: 'square' | 'angled' | 'rounded';
}
