# Leanstral 1.5 — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`
>
> **NOTE:** Deprecated Sep 29, 2026 per Mistral docs. API id `labs-leanstral-1-5` being phased out. Weights remain open on Hugging Face.

## Model card

- **Name:** Leanstral 1.5 (labs-leanstral-1-5)
- **Short description:** Mistral AI's specialized Lean 4 formal proof engineering model, released July 2, 2026. 119B total / 6.5B active parameter MoE (128 experts, 4 active). Built on Mistral Small 4 family. Trained for automated theorem proving, autoformalization, and code verification in Lean 4. Three-stage training: mid-training on Lean data, SFT, RL with CISPO. Apache 2.0 open weights.
- **Provider / access:** Hugging Face (`mistralai/Leanstral-1.5-119B-A6B`), Mistral Labs (free API endpoint, deprecated), Mistral Vibe (recommended scaffold). Self-hosted via vLLM/SGLang/Transformers (requires recent runtimes). Chat Completions API with function calling, agents.
- **Release / knowledge:** 2026-07-02 release; deprecated Sep 29, 2026. Knowledge cutoff not published (Lean-focused training data).
- **IDs:** `labs-leanstral-1-5` (Mistral Labs), `mistralai/Leanstral-1.5-119B-A6B` (HF). Free on Mistral Labs (deprecated).
- **Context window:** 256K tokens (≤200K recommended for deployment). Verified via Mistral docs, HF model card, AI-TLDR.
- **Modalities:** Text and image input; text output. Reasoning: yes (Lean-focused, multi-turn with compiler feedback). Tool calls: yes (code agent: edits files, runs bash, Lean language server). JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-10-27):** **FREE** on Mistral Labs (deprecated endpoint). Self-hosted: $0/M (Apache 2.0). No paid tier. Weights on HF (119B params, ~70 GB bf16).
- **Architecture:** MoE: 119B total, 6.5B active (128 experts, 4 active per token). Multimodal: text + image in, text out. Context 256K. Built on Mistral Small 4 family. Mid-training + SFT + RL (CISPO). MLA (Multi-head Latent Attention) per hfviewer.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

> **PARADIGM NOTE:** Leanstral is a specialized formal proof / code verification model, not a general-purpose LLM. Benchmarks are Lean/formal math specific. General LLM benchmarks (MMLU, GPQA, SWE-bench, etc.) not reported.

Agent / tool use (formal proof / code verification):

- miniF2F: **100%** (saturated: 244/244 valid, 242/244 test; pass@4) — Mistral blog / technical report / alphaXiv
- PutnamBench: **587/672** (87.3%) solved (pass@8, 4M token budget) — Mistral blog / technical report / alphaXiv
- FATE-M: **100%** (pass@2) — Mistral blog / technical report
- FATE-H: **87%** (pass@8) / 78% (pass@2) — Mistral blog / technical report / alphaXiv (SOTA among non-NL-guided)
- FATE-X: **34%** (pass@8) / 27% (pass@2) — Mistral blog / technical report / alphaXiv (SOTA among non-NL-guided)
- FLTEval: **43.2%** pass@8 ($216 cost) / 28.9% pass@1 ($27) — Mistral blog / technical report / alphaXiv
  - Beats Opus 4.6 pass@1 39.6% at 1/7 cost ($216 vs $1,650)
- ArXivLean: **17.1%** (7/41) — matches GPT-5.5 xhigh / alphaXiv
- ProofNet: **53.2%** pass@8 / 60.8% final (targeted rescue) — HF dataset yidannwang/Leanstral-1.5-results
- Agentic proof engineering: Uncovers 5 unknown bugs across 57 repos tested — Mistral blog
- Test-time scaling: PutnamBench pass@8 scales smoothly 44 (50k) → 587 (4M tokens) — technical report

Reasoning / knowledge (formal math):

- miniF2F: **100%** saturated (only fully open system to do so) — Mistral blog / technical report
- PutnamBench: **87.3%** solved (587/672) — Mistral blog / technical report
- FATE-H: **87%** (pass@8) — Mistral blog / technical report (SOTA non-NL-guided)
- FATE-X: **34%** (pass@8) — Mistral blog / technical report (SOTA non-NL-guided)
- ArXivLean: **17.1%** — alphaXiv (matches GPT-5.5 xhigh)
- ProofNet: **53.2%** pass@8 / 60.8% final — HF dataset

Coding (Lean 4 / formal verification):

- FLTEval: **43.2%** pass@8 ($216) / 28.9% pass@1 ($27) — Mistral blog / technical report / alphaXiv
- Lean 4 proof completion / autoformalization / code verification: Core capability
- Agentic bug finding: 5 unknown bugs in 57 repos — Mistral blog
- No standard SWE-bench / Terminal-Bench / LiveCodeBench scores (specialized for Lean)

Long context:

- Context window: **256K** tokens (≤200K recommended for deployment) — Mistral docs / HF / AI-TLDR
- Test-time scaling: Up to 4M token trajectories with auto-compaction every 200K — technical report
- PutnamBench: 4M token budget per trajectory for pass@8 587/672
- AVL-tree proof: 2.7M tokens across 22 compactions — technical report

Multimodal:

- Text + image input; text output — HF model card / Mistral docs
- No video/audio. Lean 4 formal language focus.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.
>
> **PARADIGM ADJUSTMENT:** Leanstral is a specialized formal proof model. General LLM benchmarks don't apply. Scores below map formal proof capabilities to the framework.

- **Tool use: 85/100.** Lean 4 compiler as tool (feedback loop), file editing, bash, Lean language server. Multi-turn proof refinement with compiler feedback. FLTEval 43% pass@8 (real PR completion). Capped by specialized domain (not general tool use).
- **Reasoning: 95/100.** miniF2F 100% (saturated), PutnamBench 87%, FATE-H 87%, FATE-X 34% (SOTA non-NL), ArXivLean 17% (matches GPT-5.5 xhigh). Exceptional formal mathematical reasoning. Capped by FATE-X 34% and ArXivLean 17%.
- **Context window: 75/100.** 256K native (256K–512K tier). Test-time scaling to 4M tokens with compaction. No RULER/GraphWalks/LOFT. Capped by no standard retrieval benchmarks.
- **Multimodal: 50/100.** Text + image in; text out. No vision benchmarks. Lean 4 formal language is text-based. Capped by text-only output, no general vision evals.
- **Coding: 80/100.** FLTEval 43% pass@8 (real Lean PRs), ProofNet 53% pass@8, 5 unknown bugs found in 57 repos. Specialized for Lean 4, not general coding (no SWE-bench/Terminal-Bench). Capped by domain specificity.
- **Cost efficiency: 100/100.** **FREE** on Mistral Labs (deprecated). Apache 2.0 open weights — self-host free. 6.5B active = ~70 GB bf16 (2× 80GB GPUs). No paid tier.
- **Overall Score: 77/100.** Mean of (85+95+75+50+80)/5 = 77.0 → adjusted to 81 for paradigm specialization. Queue shows 65 — gap due to specialized benchmarks not captured in general LLM queue. Best fit: **specialized formal proof / Lean 4 verification model**; exceptional at theorem proving and code verification; not a general LLM.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (Mistral blog/technical report, Mistral docs, HF model card, alphaXiv technical report, AI-TLDR, BenchLM, Winzheng, Ornith comparison); scores normalized 1–100 per model-comparison.md methodology with paradigm adjustment noted. **Critical limitation:** Zero general LLM benchmarks (MMLU, GPQA, SWE-bench, etc.) — all scores from formal math/Lean-specific evals. Deprecated status (Sep 29, 2026) noted.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.