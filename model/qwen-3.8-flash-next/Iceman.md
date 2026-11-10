# Qwen 3.8 Flash Next — findings by Iceman

- Source: Alibaba/Qwen 3.8 Flash Next
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Alibaba’s Qwen 3.8 Flash Next is an open-weight experimental checkpoint previewing Qwen4 architecture, optimized for cost-efficient coding, agentic tasks, and multimodal understanding with a small active parameter footprint.
- **Provider / access:** Open weights (Qwen Community license) on Hugging Face `Qwen/Qwen3.8-Flash-Next`; hosted via Vercel AI Gateway and other providers. Local metadata lists `opencode/qwen-3.8-flash-next` and `noFreeId`.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10 (blog/technical report referenced). Knowledge cutoff not explicitly stated.
- **IDs:** `qwen-3.8-flash-next`, `Qwen/Qwen3.8-Flash-Next`.
- **Context window:** 262,144 tokens natively, extensible up to 1,000,000 tokens (Hugging Face model card).
- **Modalities:** Text, image, and video input; text output; tool use (Hugging Face model card/local metadata).
- **Pricing (as of 2026-11-10):** Vercel AI Gateway $0.12 / 1M input, $0.40 / 1M output per local metadata; self-hosting available under Qwen Community license.
- **Architecture:** Causal language model with vision encoder. Language model: 125B total with 6B activated, plus 51B n-gram embedding and 4B MTP; 48 layers; hybrid attention (Gated DeltaNet + Qwen Sparse Attention) with MoE; 512 experts, 10 routed + 1 shared active; 262K native context (Hugging Face model card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card for `Qwen/Qwen3.8-Flash-Next` benchmark tables unless noted. Footnotes in the card describe harness/settings for several evaluations.

Agent / tool use:

- CoWorkBench (long-horizon office work): **73.9**
- JobBench (professional job tasks): **55.7**
- Agents' Last Exam: Pass@1 **24.3**, Score **51.2**
- Toolathlon Verified (Pass@1): **73.5**
- ClawEval-MM (multimodal tool use): Pass@3 **64.4**, Average **60.4**
- AndroidWorld (mobile use): **84.5**
- OSWorld 2.0 (computer use): Binary **19.4**, Partial **52.3**

Reasoning / knowledge:

- GPQA Diamond: **91.7**
- HLE: **35.9**
- IFBench (instruction following): **81.3**
- Scientific/multidisciplinary reasoning results reported in card table; AA Intelligence Index not explicitly listed.

Coding:

- DeepSWE 1.1 (agentic coding): **58.7**
- SWE-bench Pro: **62.5**
- SWE-bench Multilingual: **81.0**
- NL2Repo-Bench: **48.1**
- LiveCodeBench v6: **91.9**

Vision / multimodal:

- RecreationBench (application recreation): **49.9**
- Vision2Web (visual web development): **64.0**
- ERQA (embodied intelligence): **72.3**
- LVBench (long video understanding): **76.6**
- RealWorldQA (real-world perception): **88.5**
- MathVision: Without CI **90.6**, With CI **95.7**
- CharXiv (RQ): Without CI **84.6**, With CI **90.6**

Long context:

- 262K native context (extensible to 1M with YaRN) documented; no standalone MRCR/RULER/GraphWalks numeric long-context retrieval benchmark score extracted.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). As an experimental checkpoint, results may be subject to change.

- **Tool use: 87/100.** Strong verified agent/tool results (Toolathlon 73.5, CoWorkBench 73.9, JobBench 55.7, Agents' Last Exam 51.2 score, ClawEval-MM 64.4 pass@3, AndroidWorld 84.5) indicate high agentic capability for an efficient model; OSWorld 2.0 binary success is lower (19.4).
- **Reasoning: 88/100.** Excellent verified reasoning/knowledge signals (GPQA Diamond 91.7, HLE 35.9, IFBench 81.3) and strong multimodal reasoning benchmarks support high reasoning quality.
- **Context window: 86/100.** 262K native context is strong and extensible to 1M with YaRN, but native window is below 500K–1M leaders; practical long-context behavior depends on scaling configuration.
- **Multimodal: 88/100.** Verified text/image/video input with strong multimodal results (RealWorldQA 88.5, MathVision 90.6/95.7, CharXiv RQ 84.6/90.6, LVBench 76.6, Vision2Web 64.0) indicates high multimodal capability.
- **Coding: 91/100.** Excellent verified coding results for efficiency class (LiveCodeBench v6 91.9, SWE-bench Multilingual 81.0, SWE-bench Pro 62.5, DeepSWE 1.1 58.7, NL2Repo-Bench 48.1) support strong coding performance.
- **Cost efficiency: 95/100.** Very low active compute (6B activated) with low hosted pricing ($0.12/$0.40 per 1M on Vercel) and open weights makes it highly cost-efficient.
- **Overall Score: 88/100.** Mean of the five non-cost dims (87, 88, 86, 88, 91) = 88.0 → 88. Best fit for cost-efficient coding, agentic workflows, and multimodal tasks where speed/value matter; preview/checkpoint status implies potential churn.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Qwen 3.8 Flash Next model card (Hugging Face)](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
