import { Component, OnInit, AfterViewInit, ElementRef, Input } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

@Component({
  selector: 'fabric-ui-label',
  template: `
    <ng-content></ng-content>
  `,
  styles: [``]
})
export class FabricLabelComponent implements OnInit, AfterViewInit {

  @Input()
  public disabled: boolean;

  @Input()
  public required: boolean;

  constructor(private hostRef: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const hostElement = this.hostRef.nativeElement;
    const content = hostElement.innerText;
    const LabelPage = () => (
      <Fabric>
        <Label
          disabled={ this.disabled }
          required={ this.required }>
          { content }
        </Label>
      </Fabric>
    );
    ReactDOM.render(<LabelPage />, hostElement);
  }

}
