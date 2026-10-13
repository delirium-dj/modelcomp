# Gemini 3 Flash — findings by MiniMax M3

- Source: Google / Gemini 3 Flash (OpenCode Zen `opencode/gemini-3-flash`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google’s Flash-tier Gemini 3 — Pro-grade reasoning at Flash latency for agentic coding, video/image/audio understanding, and high-frequency interactive work.
- **Provider / access:** OpenCode Zen `opencode/gemini-3-flash`; Gemini API (Google AI Studio, Gemini CLI, Google Antigravity, Android Studio, Vertex AI, Gemini Enterprise).
- **Release / knowledge:** Released 2025-12-17. Default model in the Gemini app and AI Mode in Search (replacing 2.5 Flash).
- **IDs:** `opencode/gemini-3-flash` (OpenCode Zen), `gemini-3-flash` / `gemini-3-flash-preview` (Google API).
- **Context window:** 1,000,000 (1M) total (per `meta.json` and Google developer docs).
- **Modalities:** Text, image, audio in; text out. Native multimodal (vision + speech) in, text out only.
- **Pricing (as of 2026-10-13):** $0.50 / 1M input, $3.00 / 1M output. Audio input $1 / 1M (per `meta.json` and Google launch blog).
- **Architecture:** Proprietary Google Gemini 3 family; "Pro-grade reasoning with Flash-level latency" — Google explicitly states the model is their "most impressive model for agentic workflows" and pushes the Pareto frontier of quality vs. cost/speed.

### Raw benchmarks found

Agent / tool use:

- **SWE-bench Verified: 78%.** "Outperforming not only the 2.5 series, but also Gemini 3 Pro" — Google blog, 2025-12-17.
- Google flags Gemini 3 Flash as the strongest in the family for agentic workflows; Cursor, JetBrains, Figma, Replit, Harvey, Warp, Latitude, Astrocade, Presentations.ai, Bridgewater cited as launch customers.

Reasoning / knowledge:

- **GPQA Diamond: 90.4%** (PhD-level reasoning, Google blog, vendor-run).
- **Humanity's Last Exam (HLE): 33.7%** without tools (Google blog, vendor-run). With tools not disclosed in our slice.
- Uses 30% fewer tokens on average than Gemini 2.5 Pro on typical traffic, while achieving higher performance.
- **MMMU Pro (multimodal reasoning): 81.2%** — state-of-the-art, comparable to Gemini 3 Pro (Google blog).
- **3× faster than Gemini 2.5 Pro** at the same quality, per Artificial Analysis benchmarking cited by Google.

Coding:

- **SWE-bench Verified: 78%** (also reported under agentic coding). Outperforms Gemini 2.5 Pro and Gemini 3 Pro on this specific benchmark — Google explicitly markets Flash as the coding model in the family.

Long context:

- 1M total context window per `meta.json` and Google developer docs; vendor-run MRCR / long-context figures not disclosed in our slice. Position-on-Pareto plot from Google shows Gemini 3 Flash pushing the frontier on quality vs. cost vs. speed.

Multimodal:

- Text + image + audio in; text out. MMMU Pro 81.2% (state-of-the-art). Real-time video understanding, audio recording transcription, multimodal reasoning for UI analysis. Google blog positions it as the multimodal default for Gemini app users.

### Normalized scores (1–100)

- **Tool use: 86/100.** SWE-bench Verified 78% is a strong, vendor-disclosed number; Google explicitly marks it as the agentic coding model. Outperforms Gemini 3 Pro on SWE-bench Verified per Google. Sits below Opus 4.6 / Sonnet 4.6 / Claude Fable 5 hard-coding ceiling.
- **Reasoning: 84/100.** GPQA Diamond 90.4% (PhD-level) is solid; HLE 33.7% without tools is mid-pack. 30% fewer tokens than 2.5 Pro at higher quality.
- **Context window: 95/100.** 1M total is the standard Google Gemini-3-tier context; verified by `meta.json`. Top-tier.
- **Multimodal: 88/100.** Native text + image + audio in; MMMU Pro 81.2% SOTA; real-time video understanding and audio analysis in the Gemini app. Image/audio in only (text out) keeps it from 92+.
- **Coding: 80/100.** SWE-bench Verified 78% vendor-disclosed, exceeds Gemini 3 Pro on the same metric. Below Fable 5 / Opus 4.6 hard-coding ceiling.
- **Cost efficiency: 90/100.** $0.50/$3.00 is a strong frontier-tier price; Audio input at $1/1M is reasonable. Pushed as Pareto-optimal by Google; 3× faster than 2.5 Pro.
- **Overall Score: 87/100.** Mean of 5 non-cost quality dims (86+84+95+88+80)/5 = 86.6 → 87.

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-13
- Method: independent MiniMax M3 evaluation. Sources: Google "Gemini 3 Flash: frontier intelligence built for speed" launch blog (2025-12-17), OpenCode Zen `meta.json`, S5 Labs insight, Artificial Analysis benchmark reference. All numbers vendor-disclosed; treat as a strong launch claim, not an independent measurement.
- Future sources: add a new file next to this one, e.g. `Gemini_M3.md`, using the same headings. If independent (non-Google) SWE-bench Verified / GPQA Diamond numbers appear, fold them in.
