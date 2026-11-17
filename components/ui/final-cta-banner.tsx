"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";

const STYLE_ID = "final-cta-banner-styles";
const STYLES = "\n.gradient-blinds-container{position:relative;width:100%;height:100%;overflow:hidden}\n.gradient-blinds-canvas{position:absolute;inset:0;display:block;width:100%;height:100%}\n.fcb-section{--cta-void:#141210;--cta-ink:#141210;--cta-paper:#f3ede3;--cta-signal:#b8734a;--cta-signal-soft:color-mix(in srgb,var(--cta-signal) 72%,white);position:relative;z-index:2;background:var(--cta-paper);color:var(--cta-ink);padding:clamp(3rem,8vw,5.5rem) var(--page-gutter,1.25rem) clamp(4rem,10vw,6.5rem)}\n.fcb-banner{--cta-pad-y:clamp(1.1rem,8cqh,3.75rem);--cta-pad-x:clamp(1.15rem,4.5cqw,3.25rem);--cta-gap:clamp(.45rem,2.8cqh,1rem);--cta-eyebrow:clamp(.58rem,1.35cqw,.68rem);--cta-heading:clamp(1.35rem,4.6cqw + 1.2cqh,3.35rem);--cta-body:clamp(.82rem,1.35cqw + .55cqh,1.08rem);--cta-action:clamp(.78rem,1.2cqw + .4cqh,.92rem);--cta-btn-y:clamp(.55rem,2.2cqh,.85rem);--cta-btn-x:clamp(.95rem,2.8cqw,1.35rem);position:relative;isolation:isolate;container-type:size;overflow:hidden;display:flex;align-items:flex-end;width:min(100%,82rem);margin-inline:auto;aspect-ratio:2.4/1;min-height:fit-content;padding:var(--cta-pad-y) var(--cta-pad-x);border-radius:clamp(.9rem,2.2cqw,1.35rem);background:var(--cta-void);color:var(--cta-paper);box-shadow:0 1px 0 color-mix(in srgb,white 8%,transparent) inset,0 28px 56px -28px color-mix(in srgb,black 45%,transparent)}\n.fcb-photo{position:absolute;inset:0;z-index:0;border-radius:inherit;overflow:hidden;pointer-events:none}\n.fcb-blinds{position:absolute;inset:0;z-index:1;pointer-events:auto;border-radius:inherit;overflow:hidden;opacity:.72;mix-blend-mode:soft-light}\n.fcb-blindsCanvas{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;display:block;mix-blend-mode:normal!important}\n.fcb-scrim{position:absolute;inset:0;z-index:2;pointer-events:none;border-radius:inherit;background:linear-gradient(105deg,color-mix(in srgb,var(--cta-void) 82%,transparent) 0%,color-mix(in srgb,var(--cta-void) 48%,transparent) 42%,color-mix(in srgb,var(--cta-void) 28%,transparent) 100%),radial-gradient(90% 80% at 78% 50%,color-mix(in srgb,var(--cta-signal) 18%,transparent),transparent 62%)}\n.fcb-copy{position:relative;z-index:3;width:min(100%,36rem);max-width:58cqw;display:grid;gap:var(--cta-gap);pointer-events:none}\n.fcb-copy a{pointer-events:auto}\n.fcb-eyebrow{display:inline-flex;align-items:center;gap:.7rem;margin:0;font-family:var(--font-mono,ui-monospace,monospace);font-size:var(--cta-eyebrow);font-weight:500;letter-spacing:.16em;text-transform:uppercase;color:color-mix(in srgb,var(--cta-paper) 62%,transparent)}\n.fcb-eyebrowRule{width:clamp(1rem,3cqw,1.6rem);height:1px;background:color-mix(in srgb,var(--cta-signal) 70%,transparent)}\n.fcb-heading{margin:0;max-width:16ch;font-family:var(--font-display,Georgia,\"Times New Roman\",serif);font-size:var(--cta-heading);font-weight:500;line-height:1.05;letter-spacing:-.03em;color:var(--cta-paper);text-wrap:balance}\n.fcb-body{margin:0;max-width:36ch;font-family:var(--font-body,system-ui,sans-serif);font-size:var(--cta-body);line-height:1.45;color:color-mix(in srgb,var(--cta-paper) 72%,transparent)}\n.fcb-actions{display:flex;flex-wrap:wrap;align-items:center;gap:clamp(.45rem,2cqh,.85rem) clamp(.65rem,2cqw,1.1rem);margin-top:clamp(.2rem,1.5cqh,.65rem)}\n.fcb-primary{display:inline-flex;align-items:center;gap:.35rem;padding:var(--cta-btn-y) var(--cta-btn-x);border-radius:999px;background:var(--cta-signal);color:#fff;font-family:var(--font-body,system-ui,sans-serif);font-size:var(--cta-action);font-weight:600;letter-spacing:.01em;text-decoration:none;box-shadow:0 1px 0 color-mix(in srgb,white 22%,transparent) inset,0 10px 28px -12px color-mix(in srgb,var(--cta-signal) 70%,transparent);transition:background 160ms ease,transform 160ms ease}\n.fcb-primary:hover{background:color-mix(in srgb,var(--cta-signal) 88%,white);transform:translateY(-1px)}\n.fcb-primary:focus-visible{outline:2px solid var(--cta-signal-soft);outline-offset:3px}\n.fcb-secondary{display:inline-flex;align-items:center;padding:calc(var(--cta-btn-y)*.85) .35rem;color:color-mix(in srgb,var(--cta-paper) 78%,transparent);font-family:var(--font-body,system-ui,sans-serif);font-size:var(--cta-action);font-weight:500;text-decoration:underline;text-decoration-color:color-mix(in srgb,var(--cta-paper) 28%,transparent);text-underline-offset:.28em;transition:color 160ms ease,text-decoration-color 160ms ease}\n.fcb-secondary:hover{color:var(--cta-paper);text-decoration-color:color-mix(in srgb,var(--cta-paper) 55%,transparent)}\n.fcb-secondary:focus-visible{outline:2px solid var(--cta-signal-soft);outline-offset:3px;border-radius:4px}\n@container (max-height:22rem){.fcb-eyebrow{letter-spacing:.12em}.fcb-body{line-height:1.35;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}}\n@container (max-height:16rem){.fcb-eyebrow{display:none}.fcb-body{-webkit-line-clamp:1}.fcb-actions{margin-top:0}}\n@media (max-width:640px){.fcb-banner{border-radius:1.1rem;aspect-ratio:auto;min-height:22rem;container-type:inline-size;--cta-heading:clamp(1.75rem,8vw,2.35rem);--cta-body:clamp(.95rem,3.2vw,1.05rem);--cta-action:.9rem;--cta-pad-y:2rem;--cta-pad-x:1.35rem;--cta-gap:.85rem}.fcb-copy{max-width:none}.fcb-actions{flex-direction:column;align-items:flex-start}}\n@media (prefers-reduced-motion:reduce){.fcb-primary{transition:none}.fcb-primary:hover{transform:none}}\n.fcb-section{padding:0}\n.fcb-editorial .fcb-banner{aspect-ratio:auto;min-height:28rem;align-items:flex-end}\n.fcb-editorial .fcb-copy{width:min(100%,44rem);max-width:none}\n.fcb-editorial .fcb-heading{max-width:22em;font-size:clamp(1.35rem,2.5vw,2.05rem);line-height:1.15}\n.fcb-editorial .fcb-eyebrow{display:inline-flex}\n.fcb-editorial .fcb-body{max-width:62ch;display:block;-webkit-line-clamp:unset;-webkit-box-orient:unset;overflow:visible;line-height:1.55}\n@media (max-width:640px){.fcb-editorial .fcb-banner{min-height:0}.fcb-editorial .fcb-heading,.fcb-editorial .fcb-body{max-width:none}}\n";

function useInjectStyles() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID;
    el.textContent = STYLES;
    document.head.appendChild(el);
  }, []);
}

const MAX_COLORS = 8;
const MAX_WAVES = 4;
const INTRO_SECONDS = 1.8;
const RIPPLE_SECONDS = 1.6;

const VERTEX = "#version 300 es\nvoid main() {\n  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));\n  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);\n}";

const FRAGMENT = "#version 300 es\nprecision highp float;\nprecision highp int;\n\nuniform vec2 uResolution;\nuniform float uTime;\nuniform vec2 uMouse;\nuniform float uAngle;\nuniform float uNoise;\nuniform float uBlindCount;\nuniform float uSpotlightRadius;\nuniform float uSpotlightSoftness;\nuniform float uSpotlightOpacity;\nuniform float uMirror;\nuniform float uDistort;\nuniform float uShineFlip;\nuniform vec3 uColors[8];\nuniform int uColorCount;\nuniform float uLightMode;\nuniform float uShine;\nuniform float uRelief;\nuniform float uGlow;\nuniform float uSway;\nuniform float uSwayTime;\nuniform float uHover;\nuniform vec4 uWaves[4];\nuniform float uIntro;\nuniform float uGrainTime;\nuniform vec3 uLightColor;\nuniform float uPerspective;\nuniform float uGradientShift;\n\nout vec4 outColor;\n\nfloat hash(vec2 p) {\n  vec3 q = fract(vec3(p.xyx) * 0.1031);\n  q += dot(q, q.yzx + 33.33);\n  return fract((q.x + q.y) * q.z);\n}\n\nvec2 rotate2D(vec2 p, float a) {\n  float c = cos(a);\n  float s = sin(a);\n  return mat2(c, -s, s, c) * p;\n}\n\nvec2 blindSpace(vec2 uv0) {\n  float aspect = uResolution.x / uResolution.y;\n  vec2 p = uv0 * 2.0 - 1.0;\n  p.x *= aspect;\n  vec2 pr = rotate2D(p, uAngle);\n  pr.x /= aspect;\n  vec2 uv = pr * 0.5 + 0.5;\n  if (abs(uPerspective) > 0.001) {\n    float k = uPerspective * 2.2;\n    uv.x = (exp(k * uv.x) - 1.0) / (exp(k) - 1.0);\n  }\n  if (uDistort > 0.0) {\n    float a = uv.y * 6.0;\n    float b = uv.x * 6.0;\n    float w = 0.01 * uDistort;\n    uv.x += sin(a) * w;\n    uv.y += cos(b) * w;\n  }\n  return uv;\n}\n\nvec3 gradientColor(float t) {\n  float tt = clamp(t, 0.0, 1.0);\n  int count = max(uColorCount, 2);\n  float scaled = tt * float(count - 1);\n  int seg = min(int(floor(scaled)), count - 2);\n  float f = scaled - float(seg);\n  if (tt >= 1.0) return uColors[count - 1];\n  return mix(uColors[seg], uColors[seg + 1], f);\n}\n\nvoid main() {\n  vec2 frag = gl_FragCoord.xy;\n  vec2 uv0 = frag / uResolution;\n  vec2 uvMod = blindSpace(uv0);\n\n  float count = max(uBlindCount, 1.0);\n  float stripePhase = uvMod.x * count;\n  float pixel = max(fwidth(stripePhase), 1e-5);\n\n  float t = uvMod.x;\n  if (uGradientShift != 0.0) {\n    t = 1.0 - abs(1.0 - fract((t + uGradientShift) * 0.5) * 2.0);\n  }\n  if (uMirror > 0.5) {\n    t = 1.0 - abs(1.0 - 2.0 * fract(t));\n  }\n  vec3 base = gradientColor(t);\n\n  vec2 offset = uMouse / uResolution;\n  float d = length(uv0 - offset);\n  float r = max(uSpotlightRadius, 1e-4);\n  float spot = (1.0 - 2.0 * pow(d / r, uSpotlightSoftness)) * uSpotlightOpacity;\n\n  float slat = floor(stripePhase);\n  float s = stripePhase - slat;\n  float stripeAA = clamp(count * 1.25 / min(uResolution.x, uResolution.y), 0.001, 0.12);\n  float edgeBlend = 1.0 - smoothstep(0.0, stripeAA, min(s, 1.0 - s));\n  float across = mix(s, 0.5, edgeBlend);\n  float ramp = uShineFlip > 0.5 ? 1.0 - across : across;\n\n  float unit = min(uResolution.x, uResolution.y);\n  float reach = max(uSpotlightRadius, 0.05) * unit;\n  vec2 toLight = uMouse - frag;\n  float nearLight = exp(-dot(toLight, toLight) / (reach * reach));\n\n  float tilt = 0.0;\n  float pulse = 0.0;\n  if (uSway > 0.0) {\n    tilt += uSway * 0.5 * sin(uSwayTime * 0.9 + slat * 0.55) * (0.6 + 0.4 * sin(uSwayTime * 0.37 + slat * 0.21));\n  }\n  tilt += uHover * nearLight * 0.7;\n  for (int i = 0; i < 4; i++) {\n    vec4 wave = uWaves[i];\n    if (wave.w <= 0.0) continue;\n    float age = uTime - wave.z;\n    if (age < 0.0 || age > 1.60) continue;\n    float life = age / 1.60;\n    vec2 origin = blindSpace(wave.xy / uResolution);\n    float slats = abs(slat + 0.5 - origin.x * count);\n    float front = age * max(count, 4.0) * 0.95;\n    float k = (slats - front) / (0.8 + life * 1.2);\n    float along = (uvMod.y - origin.y) / max(0.42 + life * 0.5, 0.01);\n    float fade = (1.0 - life) * (1.0 - life);\n    float ring = exp(-k * k) * exp(-along * along) * fade * smoothstep(0.0, 0.2, age);\n    tilt += ring * 0.9;\n    pulse += ring;\n  }\n  if (uIntro < 1.0) {\n    float settle = smoothstep(0.0, 1.0, clamp(uIntro * 1.5 - uv0.x * 0.5, 0.0, 1.0));\n    tilt -= (1.0 - settle) * 1.2;\n  }\n\n  float edge = ramp;\n  float calm = 1.0 - 0.6 * clamp(spot, 0.0, 1.0);\n  ramp = pow(clamp(ramp, 0.0, 1.0), exp(tilt * 0.9));\n  ramp *= 1.0 - 0.3 * min(pulse, 1.0) * calm;\n  float crease = uRelief * 0.38 * smoothstep(0.62, 1.0, ramp);\n  float sheen = uShine * exp(-pow((edge - 0.035) / 0.07, 2.0)) * (0.3 + 0.7 * nearLight) * (1.0 - edgeBlend);\n\n  vec3 lit = spot > 0.0 ? uLightColor * spot : vec3(spot);\n  lit += uLightColor * min(pulse, 1.0) * 0.35 * calm;\n  vec3 revealSignal = lit + base - vec3(ramp + crease);\n\n  vec3 col;\n  if (uLightMode > 0.5) {\n    vec3 luma = vec3(0.2126, 0.7152, 0.0722);\n    float peak = max(base.r, max(base.g, base.b));\n    float low = min(base.r, min(base.g, base.b));\n    float chroma = (peak - low) / max(peak, 0.0001);\n    vec3 hue = base / max(peak, 0.0001);\n    hue = clamp(mix(vec3(dot(hue, luma)), hue, 1.3), 0.0, 1.0);\n    hue *= mix(1.0, 0.82, smoothstep(0.55, 0.9, dot(hue, luma)));\n    vec3 tint = mix(base, hue, smoothstep(0.06, 0.28, chroma));\n    vec3 revealed = clamp(revealSignal, 0.0, 1.0);\n    float coverage = max(revealed.r, max(revealed.g, revealed.b));\n    float stroke = 1.0 - smoothstep(pixel, pixel * 2.2, edge);\n    col = mix(vec3(1.0), tint, 0.72 * smoothstep(0.0, 1.0, coverage));\n    col = mix(col, tint * 0.85, stroke * clamp(coverage * 1.5, 0.0, 1.0) * 0.7);\n    col = mix(col, vec3(1.0), clamp(sheen, 0.0, 1.0) * 0.5);\n    float grain = max(0.5 * (hash(frag + uGrainTime) + hash(frag.yx + uGrainTime * 1.7)) - 0.5, 0.0);\n    col = clamp(col - vec3(grain * uNoise * 0.12 * coverage), 0.0, 1.0);\n  } else {\n    vec3 haze = base * uGlow * 0.4 * smoothstep(0.0, 1.0, spot) * (0.4 + 0.6 * ramp);\n    col = revealSignal + haze + mix(base, uLightColor, 0.45) * sheen * 0.7;\n    vec3 over = max(col - 0.8, 0.0);\n    col = min(col, vec3(0.8)) + 0.2 * (1.0 - exp(-over / 0.2));\n    float luma = dot(clamp(col, 0.0, 1.0), vec3(0.2126, 0.7152, 0.0722));\n    float grain = 0.5 * (hash(frag + uGrainTime) + hash(frag.yx + uGrainTime * 1.7)) - 0.5;\n    col += grain * uNoise * (0.45 + 0.55 * smoothstep(0.0, 0.5, luma));\n  }\n\n  float presence = smoothstep(0.0, 0.65, uIntro);\n  col = uLightMode > 0.5 ? mix(vec3(1.0), col, presence) : col * presence;\n  outColor = vec4(clamp(col, 0.0, 1.0), 1.0);\n}";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const compile = (
  gl: WebGL2RenderingContext,
  type: number,
  source: string,
) => {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return shader;
  gl.deleteShader(shader);
  return null;
};

const link = (gl: WebGL2RenderingContext) => {
  const vertex = compile(gl, gl.VERTEX_SHADER, VERTEX);
  const fragment = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
  const program = gl.createProgram();
  if (!vertex || !fragment || !program) return null;
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  gl.deleteShader(vertex);
  gl.deleteShader(fragment);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }
  const uniforms: Record<string, WebGLUniformLocation | null> = {};
  const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
  for (let i = 0; i < count; i++) {
    const info = gl.getActiveUniform(program, i);
    if (!info) continue;
    const name = info.name.replace(/\[0\]$/, "");
    uniforms[name] = gl.getUniformLocation(program, name);
  }
  return { program, uniforms };
};

const hexToRGB = (hex: string) => {
  const c = String(hex || "")
    .replace("#", "")
    .padEnd(6, "0");
  const r = parseInt(c.slice(0, 2), 16) / 255;
  const g = parseInt(c.slice(2, 4), 16) / 255;
  const b = parseInt(c.slice(4, 6), 16) / 255;
  return [r || 0, g || 0, b || 0];
};

const prepStops = (stops?: string[]) => {
  const base = (
    stops && stops.length ? stops : ["#c98a5e", "#b8734a"]
  ).slice(0, MAX_COLORS);
  if (base.length === 1) base.push(base[0]);
  while (base.length < MAX_COLORS) base.push(base[base.length - 1]);
  const flat = new Float32Array(MAX_COLORS * 3);
  for (let i = 0; i < MAX_COLORS; i++) flat.set(hexToRGB(base[i]), i * 3);
  const count = Math.max(2, Math.min(MAX_COLORS, stops?.length ?? 2));
  return { flat, count };
};

interface GradientBlindsProps {
  className?: string;
  style?: CSSProperties;
  dpr?: number;
  paused?: boolean;
  gradientColors?: string[];
  angle?: number;
  noise?: number;
  blindCount?: number;
  blindMinWidth?: number;
  mouseDampening?: number;
  mirrorGradient?: boolean;
  spotlightRadius?: number;
  spotlightSoftness?: number;
  spotlightOpacity?: number;
  distortAmount?: number;
  shineDirection?: "left" | "right";
  lightColor?: string;
  perspective?: number;
  gradientSpeed?: number;
  shine?: number;
  relief?: number;
  glow?: number;
  sway?: number;
  speed?: number;
  hoverTilt?: number;
  clickEffect?: "ripple" | "none";
  idle?: "drift" | "center" | "stay";
  intro?: boolean;
  mixBlendMode?: CSSProperties["mixBlendMode"];
  lightMode?: boolean;
}

function GradientBlinds({
  className = "",
  style,
  dpr,
  paused = false,
  gradientColors,
  angle = 0,
  noise = 0.3,
  blindCount = 16,
  blindMinWidth = 60,
  mouseDampening = 0.15,
  mirrorGradient = false,
  spotlightRadius = 0.5,
  spotlightSoftness = 1,
  spotlightOpacity = 1,
  distortAmount = 0,
  shineDirection = "left",
  lightColor = "#ffffff",
  perspective = 0,
  gradientSpeed = 0,
  shine = 0.4,
  relief = 0.5,
  glow = 0.4,
  sway = 0.35,
  speed = 1,
  hoverTilt = 0.6,
  clickEffect = "ripple",
  idle = "drift",
  intro = true,
  mixBlendMode = "lighten",
  lightMode = false,
}: GradientBlindsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wakeRef = useRef<(() => void) | null>(null);
  const colorKey = (
    gradientColors && gradientColors.length
      ? gradientColors
      : ["#c98a5e", "#b8734a"]
  ).join(",");
  const settings = {
    paused,
    colorKey,
    gradientColors,
    angle,
    noise: clamp(noise, 0, 2),
    blindCount: Math.max(1, blindCount || 1),
    blindMinWidth,
    mouseDampening: Math.max(0, mouseDampening),
    mirrorGradient,
    spotlightRadius,
    spotlightSoftness,
    spotlightOpacity,
    distortAmount,
    shineDirection,
    lightColor,
    perspective: clamp(perspective, -1, 1),
    gradientSpeed,
    shine: clamp(shine, 0, 2),
    relief: clamp(relief, 0, 1),
    glow: clamp(glow, 0, 2),
    sway: clamp(sway, 0, 1),
    speed: clamp(speed, 0, 4),
    hoverTilt: clamp(hoverTilt, 0, 1.5),
    clickEffect,
    idle,
    intro,
    lightMode,
    dpr,
  };
  const settingsRef = useRef(settings);
  settingsRef.current = settings;

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return undefined;
    const gl = canvas.getContext("webgl2", {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      premultipliedAlpha: false,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance",
    });
    if (!gl || gl.isContextLost()) return undefined;
    const shader = link(gl);
    if (!shader) return undefined;
    const u = shader.uniforms;
    const vao = gl.createVertexArray();

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const view = { width: 1, height: 1, ratio: 1, count: 1 };
    const pointer = { x: 0, y: 0, inside: false };
    const light = { x: 0, y: 0, vx: 0, vy: 0, tx: 0, ty: 0, ready: false };
    const waves = new Float32Array(MAX_WAVES * 4);
    let waveIndex = 0;
    let hover = 0;
    let time = 0;
    let swayTime = 0;
    let shift = 0;
    let grainTime = 0;
    let introClock = settingsRef.current.intro && !reduce ? 0 : 1;
    let colorKeyCache = "";
    let colorStops = prepStops(settingsRef.current.gradientColors);
    let raf = 0;
    let last = 0;
    let visible = true;

    const blindTotal = (s: typeof settings) => {
      if (s.blindMinWidth && s.blindMinWidth > 0) {
        const byWidth = Math.max(1, Math.floor(view.width / s.blindMinWidth));
        return Math.max(
          1,
          s.blindCount ? Math.min(s.blindCount, byWidth) : byWidth,
        );
      }
      return Math.max(1, s.blindCount);
    };

    const draw = () => {
      const s = settingsRef.current;
      if (colorKeyCache !== s.colorKey) {
        colorStops = prepStops(s.gradientColors);
        colorKeyCache = s.colorKey;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(shader.program);
      gl.bindVertexArray(vao);
      gl.uniform2f(u.uResolution, canvas.width, canvas.height);
      gl.uniform1f(u.uTime, time);
      gl.uniform2f(
        u.uMouse,
        light.x * view.ratio,
        (view.height - light.y) * view.ratio,
      );
      gl.uniform1f(u.uAngle, (s.angle * Math.PI) / 180);
      gl.uniform1f(u.uNoise, s.noise);
      gl.uniform1f(u.uBlindCount, blindTotal(s));
      gl.uniform1f(u.uSpotlightRadius, s.spotlightRadius);
      gl.uniform1f(u.uSpotlightSoftness, s.spotlightSoftness);
      gl.uniform1f(u.uSpotlightOpacity, s.spotlightOpacity);
      gl.uniform1f(u.uMirror, s.mirrorGradient ? 1 : 0);
      gl.uniform1f(u.uDistort, s.distortAmount);
      gl.uniform1f(u.uShineFlip, s.shineDirection === "right" ? 1 : 0);
      gl.uniform3fv(u.uColors, colorStops.flat);
      gl.uniform1i(u.uColorCount, colorStops.count);
      gl.uniform1f(u.uLightMode, s.lightMode ? 1 : 0);
      gl.uniform1f(u.uShine, s.shine);
      gl.uniform1f(u.uRelief, s.relief);
      gl.uniform1f(u.uGlow, s.glow);
      gl.uniform1f(u.uSway, reduce ? 0 : s.sway);
      gl.uniform1f(u.uSwayTime, swayTime);
      gl.uniform1f(u.uHover, hover * s.hoverTilt);
      gl.uniform4fv(u.uWaves, waves);
      gl.uniform1f(u.uIntro, introClock);
      gl.uniform1f(u.uGrainTime, grainTime);
      gl.uniform3fv(u.uLightColor, hexToRGB(s.lightColor || "#ffffff"));
      gl.uniform1f(u.uPerspective, s.perspective);
      gl.uniform1f(u.uGradientShift, shift);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      gl.bindVertexArray(null);
    };

    const aim = (s: typeof settings) => {
      if (pointer.inside) {
        light.tx = pointer.x;
        light.ty = pointer.y;
      } else if (s.idle === "center") {
        light.tx = view.width / 2;
        light.ty = view.height / 2;
      } else if (s.idle === "drift" && !reduce) {
        light.tx =
          view.width *
          (0.5 +
            0.22 * Math.sin(swayTime * 0.23) +
            0.05 * Math.sin(swayTime * 0.61 + 1.3));
        light.ty =
          view.height *
          (0.5 +
            0.16 * Math.sin(swayTime * 0.31 + 0.7) +
            0.04 * Math.sin(swayTime * 0.83));
      }
    };

    const follow = (s: typeof settings, dt: number) => {
      const tau = s.mouseDampening;
      if (tau <= 0) {
        light.x = light.tx;
        light.y = light.ty;
        light.vx = 0;
        light.vy = 0;
        return;
      }
      const omega = 2.4 / tau;
      const k = omega * omega;
      const c = 2 * omega;
      const steps = Math.max(1, Math.ceil(dt / 0.008));
      const h = dt / steps;
      for (let i = 0; i < steps; i++) {
        light.vx += (k * (light.tx - light.x) - c * light.vx) * h;
        light.vy += (k * (light.ty - light.y) - c * light.vy) * h;
        light.x += light.vx * h;
        light.y += light.vy * h;
      }
    };

    const wake = () => {
      if (!raf && visible && !document.hidden) {
        last = 0;
        raf = requestAnimationFrame(frame);
      }
    };

    const resize = () => {
      const s = settingsRef.current;
      view.width = Math.max(1, container.clientWidth);
      view.height = Math.max(1, container.clientHeight);
      view.ratio = Math.min(s.dpr || window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(view.width * view.ratio));
      canvas.height = Math.max(1, Math.round(view.height * view.ratio));
      if (!light.ready) {
        light.ready = true;
        light.x = light.tx = view.width / 2;
        light.y = light.ty = view.height / 2;
      }
      draw();
      wake();
    };

    const frame = (now: number) => {
      raf = 0;
      if (!visible || document.hidden) return;
      const s = settingsRef.current;
      const dt = last ? clamp((now - last) / 1000, 0.001, 1 / 20) : 1 / 60;
      last = now;
      if (s.paused) return;
      time += dt;
      if (!reduce) {
        swayTime += dt * s.speed;
        shift = (shift + dt * s.gradientSpeed * 0.06) % 2;
      }
      grainTime = Math.floor(time * 24) * 17.13;
      if (introClock < 1) introClock = Math.min(1, introClock + dt / INTRO_SECONDS);
      hover += ((pointer.inside ? 1 : 0) - hover) * (1 - Math.exp(-dt / 0.35));
      aim(s);
      follow(s, dt);
      for (let i = 0; i < MAX_WAVES; i++) {
        if (waves[i * 4 + 3] > 0 && time - waves[i * 4 + 2] > RIPPLE_SECONDS)
          waves[i * 4 + 3] = 0;
      }
      draw();
      const settling =
        Math.abs(light.tx - light.x) > 0.05 ||
        Math.abs(light.ty - light.y) > 0.05 ||
        Math.abs(light.vx) + Math.abs(light.vy) > 0.05 ||
        Math.abs((pointer.inside ? 1 : 0) - hover) > 0.002;
      const active =
        settling ||
        introClock < 1 ||
        waves.some((value, index) => index % 4 === 3 && value > 0) ||
        (!reduce &&
          (s.noise > 0 ||
            s.gradientSpeed !== 0 ||
            (s.sway > 0 && s.speed > 0) ||
            (s.idle === "drift" && !pointer.inside)));
      if (active) raf = requestAnimationFrame(frame);
    };

    const locate = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      return {
        x,
        y,
        inside: x >= 0 && y >= 0 && x <= rect.width && y <= rect.height,
      };
    };

    const onPointerMove = (event: PointerEvent) => {
      const { x, y, inside } = locate(event);
      pointer.x = x;
      pointer.y = y;
      pointer.inside = inside;
      if (inside) wake();
    };

    const onPointerDown = (event: PointerEvent) => {
      const s = settingsRef.current;
      const { x, y, inside } = locate(event);
      if (!inside || reduce || s.clickEffect !== "ripple") return;
      const o = waveIndex * 4;
      waves[o] = x * view.ratio;
      waves[o + 1] = (view.height - y) * view.ratio;
      waves[o + 2] = time;
      waves[o + 3] = 1;
      waveIndex = (waveIndex + 1) % MAX_WAVES;
      wake();
    };

    const onPointerLeave = () => {
      pointer.inside = false;
      wake();
    };

    const onVisibility = () => {
      last = 0;
      wake();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    const intersection = new IntersectionObserver((entries) => {
      visible = entries.some((entry) => entry.isIntersecting);
      if (visible) wake();
    });
    intersection.observe(container);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);
    resize();
    wakeRef.current = wake;

    return () => {
      cancelAnimationFrame(raf);
      wakeRef.current = null;
      resizeObserver.disconnect();
      intersection.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      gl.deleteVertexArray(vao);
      gl.deleteProgram(shader.program);
    };
  }, []);

  useEffect(() => {
    wakeRef.current?.();
  });

  return (
    <div
      ref={containerRef}
      className={`gradient-blinds-container${className ? ` ${className}` : ""}`}
      style={{
        ...(!lightMode && mixBlendMode ? { mixBlendMode } : null),
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        className="gradient-blinds-canvas"
        aria-hidden="true"
      />
    </div>
  );
}

export type FinalCtaBannerProps = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  gradientColors?: string[];
  backgroundImage?: string;
  backgroundAlt?: string;
  className?: string;
};

export default function FinalCtaBanner({
  eyebrow = "Start a project",
  heading = "Let's make your business look the way it deserves.",
  body = "Tell us about your business. We will set up a free discovery call and follow with a written proposal.",
  primaryLabel = "Book a discovery call",
  primaryHref = "/contact",
  secondaryLabel = "Message us on WhatsApp",
  secondaryHref = "https://wa.me/",
  gradientColors = ["#c98a5e", "#b8734a", "#5c3d2e", "#141210"],
  backgroundImage,
  backgroundAlt = "",
  className = "",
}: FinalCtaBannerProps) {
  useInjectStyles();
  const secondaryExternal =
    secondaryHref.startsWith("http://") || secondaryHref.startsWith("https://");

  return (
    <section
      className={`fcb-section${className ? ` ${className}` : ""}`}
      aria-labelledby="final-cta-heading"
    >
      <div className="fcb-banner">
        {backgroundImage ? (
          <div className="fcb-photo" aria-hidden={backgroundAlt ? undefined : true}>
            <Image
              src={backgroundImage}
              alt={backgroundAlt}
              fill
              sizes="(max-width: 1280px) 100vw, 82rem"
              quality={85}
              className="object-cover object-[center_35%]"
              priority={false}
            />
          </div>
        ) : null}
        <div className="fcb-blinds" aria-hidden="true">
          <GradientBlinds
            className="fcb-blindsCanvas"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              inset: 0,
            }}
            gradientColors={gradientColors}
            angle={20}
            blindCount={16}
            blindMinWidth={60}
            spotlightRadius={0.5}
            shine={0.4}
            relief={0.5}
            glow={0.4}
            sway={0.35}
            hoverTilt={0.6}
            clickEffect="ripple"
            noise={0.3}
            shineDirection="left"
            lightColor="#ffffff"
            idle="drift"
            mixBlendMode="normal"
            lightMode={false}
            intro
          />
        </div>
        <div className="fcb-scrim" aria-hidden="true" />

        <div className="fcb-copy">
          <p className="fcb-eyebrow">
            <span className="fcb-eyebrowRule" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 id="final-cta-heading" className="fcb-heading">
            {heading}
          </h2>
          {body.split(/\n\n+/).map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="fcb-body">
              {paragraph}
            </p>
          ))}

          <div className="fcb-actions">
            <a href={primaryHref} className="fcb-primary">
              {primaryLabel}
              <span aria-hidden="true"> →</span>
            </a>
            <a
              href={secondaryHref}
              className="fcb-secondary"
              {...(secondaryExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {secondaryLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
