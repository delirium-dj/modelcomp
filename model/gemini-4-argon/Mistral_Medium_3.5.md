# Gemini 4 Argon — findings by Mistral Medium 3.5

- Source: Google/DeepMind/Gemini 4 Argon
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's frontier reasoning model for deep work across coding, finance, legal, cybersecurity, and science. Features unified 1M-token context and long decode for extended reasoning trajectories.
- **Provider / access:** `google/gemini-4-argon` via Google AI Studio, Google Cloud Vertex AI, and Antigravity
- **Release / knowledge:** October 2026 (generally available)
- **IDs:** `gemini-4-argon` (standard), `gemini-4-argon-cyber-permissive` (limited access, defensive cybersecurity)
- **Context window:** 1,048,576 tokens (1M) unified across input + output + thinking + function calls; long decode enabled by default
- **Modalities:** text + image + video input; text output; long decode for extended reasoning; tool calls; JSON mode; no audio
- **Pricing (as of 2026-11-05):** Introductory $2.00/$10.00 per 1M input/output tokens through November 30, 2026; standard $4.00/$20.00 thereafter; cached input tokens at 95% discount
- **Architecture:** Proprietary; long decode for extended reasoning trajectories; no verified public parameter count or MoE configuration disclosed

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **~57%** (estimated from comparisons; Opus 5.5 leads at 66.4%; source: MindStudio, DataCamp comparisons)
- Artificial Analysis Intelligence Index: **53** (high reasoning, tied with GPT-6 Astra at max; source: Artificial Analysis September 30, 2026)
- AutomationBench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**
- SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **53 / #5** (82.28/100 on BenchLM; source: BenchLM November 2026)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- RiemannBench: **leads** (source: DataCamp comparison)

Coding:

- SWE-bench Verified: **no verified public score found**
- SWE-bench Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode: **no verified public score found**
- Vibe Code Bench: **91.9%** (highest among compared models; source: MindStudio)
- DeepSWE v1.1: **77.9%** (record-setting, above GPT-6 Astra and Claude Opus 5.5; source: Google announcement, ofox.ai)
- FrontierSWE v2: **55.0%** (below Opus 5.5 and GPT-6 Astra; source: ofox.ai)
- FrontierCode: **no verified public score found**
- CursorBench: **no verified public score found**
- Deep Sweep: **leads** (source: MindStudio)

Long context:

- 1M token unified context verified; excels at turning huge, unstructured inputs into cohesive outputs per Google Cloud Blog

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong agentic foundation with estimated ~57% Terminal-Bench 4.0 and 53 AA Intelligence Index. Capped by lack of direct public Terminal-Bench confirmation and trailing Opus 5.5 on execution tasks.
- **Reasoning: 93/100.** Artificial Analysis Index 53 at high reasoning (tied with GPT-6 Astra), BenchLM 82.28/100 (#5 overall), leads RiemannBench. Capped by limited public knowledge benchmark disclosure.
- **Context window: 100/100.** 1M token unified context with long decode verified from official Google documentation. Maximum tier.
- **Multimodal: 92/100.** Text + image + video input with strong performance on 3D scene generation (Three.js, Unreal Engine) and visual tasks. Capped by trailing Opus 5.5 and Astra in visual polish and realism per hands-on testing.
- **Coding: 90/100.** Best-in-class DeepSWE v1.1 at 77.9%, leads Vibe Code Bench at 91.9%, leads Deep Sweep. However, 55.0% FrontierSWE v2 and ~57% Terminal-Bench lag behind Opus 5.5. Capped by execution vs. generation gap.
- **Cost efficiency: 88/100.** Introductory $2/$10 per 1M tokens (through Nov 30) then $4/$20 standard; cached tokens at 95% off. Extremely competitive at frontier level.
- **Overall Score: 93/100.** Frontier reasoning with exceptional deep work capabilities; slight execution gap vs. Opus 5.5 on terminal tasks prevents higher score.

---

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/Mistral-Medium-3.5)** — 2026-11-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 4 Argon — Google AI Studio](https://aistudio.google.com/docs/models/gemini-4-argon)
  - [Gemini 4 Argon Developer Guide — Google Cloud](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/guides/gemini-4-argon)
  - [Gemini 4 Argon Announcement — Google Cloud Blog](https://cloud.google.com/blog/products/ai-machine-learning/gemini-4-argon-available-on-google-cloud)
  - [Gemini 4 Argon Model Card — DeepMind](https://deepmind.google/models/model-cards/gemini-4-argon/)
  - [Artificial Analysis — Gemini 4 Argon](https://artificialanalysis.ai/models/gemini-4-argon)
  - [BenchLM — Gemini 4 Argon (82.28/100, #5)](https://benchlm.ai/models/gemini-4-argon)
  - [BenchLeader — Gemini 4 Argon](https://www.benchleader.com/models/gemini-4-argon)
  - [Emergent — Gemini 4 Argon Benchmarks](https://emergent.sh/learn/gemini-4-argon-benchmarks)
  - [ofox.ai — Comparison Guide](https://ofox.ai/blog/gemini-4-argon-benchmarks-vs-gpt-6-astra-claude-opus/)
