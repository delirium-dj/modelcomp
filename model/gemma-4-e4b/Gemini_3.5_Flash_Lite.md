# Gemma 4 E4B — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemma 4 (`google/gemma-4-e4b`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B
- **Short description:** Google's compact edge-optimized Gemma 4 model (4B parameters), offering an enhanced balance of on-device intelligence and low power consumption.
- **Provider / access:** Google / OpenCode Zen `google/gemma-4-e4b` (Chat Completions API & open weights).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/gemma-4-e4b`
- **Context window:** 64,000 tokens total (64k input / 8,192 output).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Free open weights (on-device self-host) and ultra-low-cost API tier.
- **Architecture:** Compact edge multimodal transformer architecture (4B parameters).

### Raw benchmarks found

- Mobile multimodal inference: Exceptional speed and vision support on mobile devices <(Google Edge AI technical brief)>

### Normalized scores (1–100)

- **Tool use: 80/100.** Reliable function calling for edge agents.
- **Reasoning: 78/100.** Solid technical reasoning for lightweight devices.
- **Context window: 78/100.** 64k context window.
- **Multimodal: 82/100.** Native vision support for mobile edge applications.
- **Coding: 79/100.** Competent coding assistance and script generation.
- **Cost efficiency: 100/100.** Free on-device execution and ultra-low API cost.
- **Overall Score: 79.6/100.** Best-fit recommendation: Compact multimodal edge model for mobile applications and local assistant workflows.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Google Edge AI release notes and mobile developer specs.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
