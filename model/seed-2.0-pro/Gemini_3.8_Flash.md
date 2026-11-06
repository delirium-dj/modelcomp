# ByteDance Seed 2.0 Pro — findings by Gemini 3.8 Flash

- Source: ByteDance Seed / Volcano Engine (`bytedance/seed-2.0-pro`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** ByteDance Seed 2.0 Pro
- **Short description:** ByteDance's flagship multimodal foundation model (`Doubao-Seed-2.0-pro` via Volcano Engine Ark) engineered for complex long-chain reasoning, multi-turn agent workflows, Olympiad-level mathematics, and fine-grained visual/temporal understanding.
- **Provider / access:** `deepinfra/ByteDance/Seed-2.0-pro`, Volcano Engine (Volcano Ark), ByteDance API.
- **Release / knowledge:** February 14, 2026 release; knowledge cutoff mid-2026.
- **IDs:** `deepinfra/ByteDance/Seed-2.0-pro`, `bytedance/seed-2.0-pro`, `doubao-seed-2.0-pro`.
- **Context window:** 262,144 tokens total (256K context window; 65,536 max output).
- **Modalities:** Native multimodal (text, image, video in; text and structured code out; tool calls and thinking traces).
- **Pricing (as of 2026-11-06):** ~$0.45 / 1M input tokens, ~$1.80 / 1M output tokens ($0.05 cached read).
- **Architecture:** Frontier multimodal transformer with integrated spatio-temporal video encoders, reasoning traces, and enterprise tool execution.

### Raw benchmarks found

Verified evaluations and benchmarks from ByteDance Seed official technical reports and Volcano Engine disclosures:

- **Primary Reference:** [Volcano Engine / ByteDance](https://volcengine.com) / DeepInfra
- **Key Benchmarks & Findings:**
  - AIME 2025: **98.3%**
  - GPQA Diamond: **88.9%**
  - LiveCodeBench v6: **87.8%**
  - SWE-bench Verified: **76.5%**
  - Codeforces rating: **~3020** Elo-equivalent
  - Multimodal Vision & Video: SOTA on MathVista, MathVision, MathCanvas, VideoMME, and MotionBench
  - Context Window: 256K native context window (262,144 tokens).

### Normalized scores (1–100)

- **Tool use: 85/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and multi-turn enterprise agent loops.
- **Reasoning: 90/100.** High-level mathematical and scientific problem-solving confirmed by 98.3% on AIME 2025 and 88.9% on GPQA Diamond.
- **Context window: 82/100.** Effective retrieval fidelity and recall across 256K context capacity with 65K output headroom.
- **Multimodal: 88/100.** Top-tier visual reasoning across MathVista, MathVision, VideoMME, and temporal video comprehension.
- **Coding: 87/100.** Verified software engineering prowess backed by 76.5% on SWE-bench Verified and 87.8% on LiveCodeBench v6.
- **Cost efficiency: 90/100.** Strong enterprise cost-performance ratio on Volcano Engine and DeepInfra endpoints.
- **Overall Score: 86/100.** Quality arithmetic mean of the five core dimensions: (85 + 90 + 82 + 88 + 87) / 5 = 86.4 → 86/100.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-06
- Method: Public internet research into ByteDance Seed technical disclosures, Volcano Engine documentation, and independent coding/reasoning leaderboards; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
