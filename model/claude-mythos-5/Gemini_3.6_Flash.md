# Claude Mythos 5 — findings by Gemini 3.6 Flash

- Source: Anthropic/`anthropic/claude-mythos-5`
- Date: 2026-11-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5 (restricted research tier; no free-tier ID available on Zen)
- **Short description:** Claude Mythos 5 is Anthropic's flagship next-generation reasoning and agentic model, engineered for high-complexity software engineering, scientific problem solving, and autonomous tool deployment. It is currently deployed under restricted safety-gated access protocols as detailed in the Anthropic System Card.
- **Provider / access:** Anthropic (`anthropic/claude-mythos-5` restricted access). Accessible via Anthropic Messages API for approved organizations. No free `opencode/` model ID exists on OpenCode Zen.
- **Release / knowledge:** 2026-10-15 (official system card publication); knowledge cutoff mid-2026.
- **IDs:** `anthropic/claude-mythos-5` (state explicitly: no Free ID exists on OpenCode Zen)
- **Context window:** 1,000,000+ tokens total (1M+ combined input/output window; verified via Anthropic System Card and BenchLM).
- **Modalities:** Text, Image, PDF input; Text output; Reasoning: yes; Tool calls: yes; JSON mode: yes.
- **Pricing (as of 2026-11-07):** Restricted deployment (custom enterprise/research licensing; standard public API pricing unlisted). Note: No free-tier option on Zen.
- **Architecture:** Proprietary frontier transformer model with extended test-time reasoning and agentic tool integration; proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.0%** (Anthropic: Claude Fable 5 and Claude Mythos 5 system card)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.1%** (Anthropic: Claude Fable 5 and Claude Mythos 5 system card)
- HLE: **64.5%** (Anthropic system card; 59.0% without tools)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found / Unranked** (BenchLM: unranked due to restricted deployment)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **95.5%** (SWE-bench Verified) / **80.3%** (SWE-bench Pro) (Anthropic system card)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **88.0%** (Terminal-Bench 2.1, Anthropic system card) / **92.2%** (SWE Multilingual, Anthropic system card)

Long context:

- no long-context retrieval reported (1M+ token context window verified via Anthropic System Card and BenchLM)

### Normalized scores (1-100)

- **Tool use: 96/100.** S-tier agentic execution demonstrated on Terminal-Bench 2.1 (88.0%, reaching the 88%+ frontier threshold), OSWorld-Verified (85.0%), BrowseComp (88.0%), and CyberGym (83.8%).
- **Reasoning: 98/100.** Industry-leading scientific and mathematical reasoning verified on GPQA (94.1%, exceeding the 90%+ frontier threshold), HLE (64.5%, exceeding the 40%+ frontier threshold), and USAMO 2026 (97.6%).
- **Context window: 96/100.** Tiered for a verified 1M+ token context window (Anthropic System Card); specific long-context retrieval benchmarks (MRCR/RULER) not reported.
- **Multimodal: 88/100.** Multi-modal capability covering text, image vision, and PDF document synthesis, supported by CharXiv (93.5%) and SWE-bench Multimodal (54.9%). Capped by text-only generation and lack of native audio input.
- **Coding: 99/100.** Unprecedented frontier coding performance on SWE-bench Verified (95.5%), SWE-bench Pro (80.3%), Terminal-Bench 2.1 (88.0%), and SWE Multilingual (92.2%).
- **Cost efficiency: 50/100.** Restricted safety-gated research deployment with unlisted public API rates.
- **Overall Score: 95.4/100.** Mean of five non-cost dimensions (96 + 98 + 96 + 88 + 99) / 5 = 95.4. Recommended as the state-of-the-art benchmark leader for automated software engineering, high-stakes cybersecurity, and frontier scientific reasoning.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-11-07
- Method: Public internet research across the official Anthropic Claude Fable 5 and Claude Mythos 5 System Card and BenchLM; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
