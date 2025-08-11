import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import AudioFeatureIndicator from '@/components/ui/AudioFeatureIndicator'

const meta = {
  title: 'Components/AudioFeatureIndicator',
  component: AudioFeatureIndicator,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['energy', 'danceability', 'acousticness', 'valence'],
    },
    value: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
    },
    displayMode: {
      control: 'select',
      options: ['icon', 'bar', 'percentage'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    showLabel: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof AudioFeatureIndicator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'energy',
    value: 0.7,
    displayMode: 'icon',
    size: 'medium',
    showLabel: true,
  },
}

export const AllTypes: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px',
        padding: '20px',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '16px', color: '#333' }}>Energy</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <AudioFeatureIndicator type="energy" value={0.2} showLabel />
          <AudioFeatureIndicator type="energy" value={0.5} showLabel />
          <AudioFeatureIndicator type="energy" value={0.8} showLabel />
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '16px', color: '#333' }}>Danceability</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <AudioFeatureIndicator type="danceability" value={0.2} showLabel />
          <AudioFeatureIndicator type="danceability" value={0.5} showLabel />
          <AudioFeatureIndicator type="danceability" value={0.8} showLabel />
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '16px', color: '#333' }}>Acousticness</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <AudioFeatureIndicator type="acousticness" value={0.2} showLabel />
          <AudioFeatureIndicator type="acousticness" value={0.5} showLabel />
          <AudioFeatureIndicator type="acousticness" value={0.8} showLabel />
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '16px', color: '#333' }}>Valence</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <AudioFeatureIndicator type="valence" value={0.2} showLabel />
          <AudioFeatureIndicator type="valence" value={0.5} showLabel />
          <AudioFeatureIndicator type="valence" value={0.8} showLabel />
        </div>
      </div>
    </div>
  ),
}

export const DisplayModes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        padding: '20px',
      }}
    >
      <div>
        <h4 style={{ marginBottom: '16px', color: '#333' }}>Icon Mode</h4>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <AudioFeatureIndicator type="energy" value={0.8} displayMode="icon" showLabel />
          <AudioFeatureIndicator type="danceability" value={0.6} displayMode="icon" showLabel />
          <AudioFeatureIndicator type="acousticness" value={0.3} displayMode="icon" showLabel />
          <AudioFeatureIndicator type="valence" value={0.7} displayMode="icon" showLabel />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: '16px', color: '#333' }}>Bar Mode</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <AudioFeatureIndicator type="energy" value={0.8} displayMode="bar" showLabel />
          <AudioFeatureIndicator type="danceability" value={0.6} displayMode="bar" showLabel />
          <AudioFeatureIndicator type="acousticness" value={0.3} displayMode="bar" showLabel />
          <AudioFeatureIndicator type="valence" value={0.7} displayMode="bar" showLabel />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: '16px', color: '#333' }}>Percentage Mode</h4>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <AudioFeatureIndicator type="energy" value={0.8} displayMode="percentage" showLabel />
          <AudioFeatureIndicator
            type="danceability"
            value={0.6}
            displayMode="percentage"
            showLabel
          />
          <AudioFeatureIndicator
            type="acousticness"
            value={0.3}
            displayMode="percentage"
            showLabel
          />
          <AudioFeatureIndicator type="valence" value={0.7} displayMode="percentage" showLabel />
        </div>
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        padding: '20px',
      }}
    >
      <div>
        <h4 style={{ marginBottom: '16px', color: '#333' }}>Small</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <AudioFeatureIndicator type="energy" value={0.8} size="small" showLabel />
          <AudioFeatureIndicator type="danceability" value={0.6} size="small" showLabel />
          <AudioFeatureIndicator type="acousticness" value={0.3} size="small" showLabel />
          <AudioFeatureIndicator type="valence" value={0.7} size="small" showLabel />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: '16px', color: '#333' }}>Medium (Default)</h4>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <AudioFeatureIndicator type="energy" value={0.8} size="medium" showLabel />
          <AudioFeatureIndicator type="danceability" value={0.6} size="medium" showLabel />
          <AudioFeatureIndicator type="acousticness" value={0.3} size="medium" showLabel />
          <AudioFeatureIndicator type="valence" value={0.7} size="medium" showLabel />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: '16px', color: '#333' }}>Large</h4>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <AudioFeatureIndicator type="energy" value={0.8} size="large" showLabel />
          <AudioFeatureIndicator type="danceability" value={0.6} size="large" showLabel />
          <AudioFeatureIndicator type="acousticness" value={0.3} size="large" showLabel />
          <AudioFeatureIndicator type="valence" value={0.7} size="large" showLabel />
        </div>
      </div>
    </div>
  ),
}

export const InteractiveDemo: Story = {
  render: () => {
    const [energyValue, setEnergyValue] = React.useState(0.7)
    const [danceValue, setDanceValue] = React.useState(0.6)
    const [acousticValue, setAcousticValue] = React.useState(0.3)
    const [valenceValue, setValenceValue] = React.useState(0.8)

    return (
      <div style={{ padding: '20px' }}>
        <h4 style={{ marginBottom: '24px', color: '#333' }}>Interactive Demo</h4>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '200px 1fr',
            gap: '24px',
            alignItems: 'start',
          }}
        >
          {/* Controls */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', marginBottom: '4px' }}>
                Energy: {Math.round(energyValue * 100)}%
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={energyValue}
                onChange={(e) => setEnergyValue(parseFloat(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', marginBottom: '4px' }}>
                Dance: {Math.round(danceValue * 100)}%
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={danceValue}
                onChange={(e) => setDanceValue(parseFloat(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', marginBottom: '4px' }}>
                Acoustic: {Math.round(acousticValue * 100)}%
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={acousticValue}
                onChange={(e) => setAcousticValue(parseFloat(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', marginBottom: '4px' }}>
                Valence: {Math.round(valenceValue * 100)}%
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={valenceValue}
                onChange={(e) => setValenceValue(parseFloat(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>
          </div>

          {/* Display */}
          <div
            style={{
              background: '#fafafa',
              padding: '24px',
              borderRadius: '12px',
              display: 'flex',
              gap: '32px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AudioFeatureIndicator type="energy" value={energyValue} showLabel />
            <AudioFeatureIndicator type="danceability" value={danceValue} showLabel />
            <AudioFeatureIndicator type="acousticness" value={acousticValue} showLabel />
            <AudioFeatureIndicator type="valence" value={valenceValue} showLabel />
          </div>
        </div>
      </div>
    )
  },
}
