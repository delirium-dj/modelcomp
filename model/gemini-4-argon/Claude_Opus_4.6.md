# Gemini 4 Argon — findings by Claude Opus 4.6

- Source: Google DeepMind (`gemini-4-argon`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's frontier reasoning model, announced September 30, 2026, built for deep reasoning across long-horizon professional tasks including software engineering, cybersecurity defense, and enterprise knowledge work. Features an industry-leading 1M-token output limit.
- **Provider / access:** Currently restricted to Google's Fairwind Program (vetted cybersecurity experts). Planned for Google Cloud Vertex AI and paid API access. Not yet generally available.
- **Release / knowledge:** 2026-09-30 announcement; general availability pending. Knowledge cutoff not publicly confirmed.
- **IDs:** `google/gemini-4-argon` (anticipated)
- **Context window:** Input context window not publicly specified; max output 1,000,000 tokens (industry-leading single-response output).
- **Modalities:** Text + image + video + audio + code in; text out; deep reasoning mode; tool calls.
- **Pricing (as of 2026-10-03):** Introductory: $2.00 / $10.00 per 1M tokens (input / output). Standard: $4.00 / $20.00. 95% discount on cached input tokens.
- **Architecture:** Proprietary; parameter count undisclosed. Specialized cybersecurity defensive training.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **57.4%** (Google launch data; trails Claude Opus 5.5 at 66.4%).
- CWE-bench v1 (cybersecurity): **68.0%** (tied with GPT-6 Astra; Google launch data).
- AutomationBench: **51.3%** (Google launch data).
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public standalone score found.
- Enterprise Knowledge Work (Vals Index): **68.9%** (Google launch data).
- LVBench (long-video understanding): **91.7%** (Google launch data).
- HLE: no verified public score found.
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- Artificial Analysis Intelligence Index: competitive position, exact score not yet independently verified.
- Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding:

- DeepSWE v1.1: **77.9%** (leads Claude Opus 5.5 at 74.2% and GPT-6 Astra at 74.1%; Google launch data).
- FrontierSWE v2: **55.0%** (trails GPT-6 Astra at 65.5% and Claude Opus 5.5 at 62.3%).
- Terminal-Bench Science: **57.6%** (trails GPT-6 Astra at 68.1%).
- SWE-bench Verified / SWE-bench Pro: no verified public score found.
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: no verified public score found.
- Vibe Code Bench: no verified public score found.

Long context:

- 1M-token output confirmed. Input context window not publicly specified. No specific MRCR / RULER / GraphWalks retrieval score published.

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 4.0 at 57.4% is mid-tier among frontier models; CWE-bench 68.0% shows strong cybersecurity tooling; AutomationBench 51.3% is moderate. Capped by trailing performance on Terminal-Bench vs Opus 5.5.
- **Reasoning: 90/100.** Enterprise Knowledge Work Vals Index 68.9% is competitive; LVBench 91.7% is excellent for long-video reasoning. Google claims leadership in 13/19 benchmark rows. Capped by absence of GPQA Diamond score and restricted independent verification.
- **Context window: 92/100.** 1M-token output is industry-leading; however input context not publicly specified. Designed for large-scale codebase migrations. Capped by lack of published MRCR/RULER data.
- **Multimodal: 85/100.** Processes text, image, video, audio, and code natively. LVBench 91.7% demonstrates strong video understanding. Text-only output. Capped by no generative multimodal output.
- **Coding: 88/100.** DeepSWE v1.1 at 77.9% leads competitors; however FrontierSWE v2 at 55.0% trails significantly. Strong at long-horizon agentic coding tasks. Capped by mixed benchmark profile and lack of SWE-bench/LiveCodeBench data.
- **Cost efficiency: 65/100.** Introductory $2/$10 is competitive; standard $4/$20 matches Claude Opus 5.5. 95% cache discount is excellent. Capped by premium standard pricing and restricted access.
- **Overall Score: 88/100.** Mean of (85 + 90 + 92 + 85 + 88) / 5 = 88.0. A powerful frontier model with record output length and strong coding, limited by restricted access and mixed independent benchmarks.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-03
- Method: Public internet research (Google Blog, Artificial Analysis, emergent.sh, alphacorp.ai, independent evaluations); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
