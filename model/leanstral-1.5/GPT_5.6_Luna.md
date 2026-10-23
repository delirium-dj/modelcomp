# Leanstral 1.5 — findings by GPT 5.6 Luna

- Source: Mistral (`mistralai/Leanstral-1.5-119B-A6B`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Leanstral 1.5
- **Short description:** Mistral's open-weight code-agent model for Lean 4 formal proof engineering, automated theorem proving, and code verification. This report scores only the exact `Leanstral 1.5` checkpoint and does not substitute Leanstral 1/2603, Mistral Small, or any benchmark comparator.
- **Provider / access:** Mistral API exact ID `labs-leanstral-1-5` via Chat Completions, with function calling, structured outputs, and Agents & Conversations documented. Local access is available through vLLM using the exact Hugging Face checkpoint `mistralai/Leanstral-1.5-119B-A6B`.
- **Release / knowledge:** Official model documentation lists 2026-06-30; Mistral's release post is dated 2026-07-02. No knowledge cutoff is published.
- **IDs:** `mistral/labs-leanstral-1-5` (API documentation ID: `labs-leanstral-1-5`); `mistralai/Leanstral-1.5-119B-A6B` (weights). No exact OpenCode Zen ID was verified.
- **Context window:** 256K tokens native; Mistral's API documentation lists 128K maximum output, and the model card recommends keeping context at or below 200K. Verified by the [official model card](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B) and [Mistral API card](https://docs.mistral.ai/models/model-cards/leanstral-1-5).
- **Modalities:** Text and image input, text output; optional reasoning effort `none` or `high`; function/tool calls and structured outputs. No audio or video input/output is documented.
- **Pricing (as of 2026-10-23):** Mistral's release materials describe a free API endpoint, and the model card says a free Mistral plan is sufficient. The official API card now marks `labs-leanstral-1-5` deprecated and phased out as of 2026-09-29, so no current paid token price was verified. The weights are Apache 2.0; self-hosting still incurs infrastructure cost.
- **Architecture:** Mixture of experts with 128 experts and 4 active per token; 119B total and 6.5B active parameters per the exact model card and API card. Mistral's announcement summary says 6B active, a minor reporting conflict; the more specific exact-model cards use 6.5B and that value is used here. The model card describes it as part of the Mistral Small 4 family, but it remains a separate Leanstral 1.5 checkpoint for this report.

### Raw benchmarks found

> Exact-model evidence only. The official charts compare other provers, but their results are not substituted for Leanstral 1.5.

Agent / tool use:

- Tool/function calling: supported by the [Mistral API card](https://docs.mistral.ai/models/model-cards/leanstral-1-5) and exact [Hugging Face model card](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B); no verified public Terminal-Bench, Tau3-Banking, GDPval-AA, or Claw-Eval score found.
- Code-agent case study: 57 repositories tested; 47 violated properties flagged, 11 genuine bugs, including 5 previously unreported bugs. This is a vendor case study, not a standardized leaderboard score ([Mistral](https://mistral.ai/news/leanstral-1-5/), independently summarized by [The Decoder](https://the-decoder.com/mistrals-open-source-leanstral-1-5-aces-formal-math-benchmarks-and-catches-real-bugs-in-code/)).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- miniF2F: **100% on validation and test sets** ([Mistral](https://mistral.ai/news/leanstral-1-5/), corroborated by [MarkTechPost](https://www.marktechpost.com/2026/07/03/mistral-ai-releases-leanstral-1-5-an-apache-2-0-lean-4-code-agent-model-solving-587-of-672-putnambench-problems/) and [The Decoder](https://the-decoder.com/mistrals-open-source-leanstral-1-5-aces-formal-math-benchmarks-and-catches-real-bugs-in-code/)).
- PutnamBench: **587/672 solved (87.4%, Pass@8 at the reported 4M-token attempt budget)** ([Mistral](https://mistral.ai/news/leanstral-1-5/); the exact model card's benchmark chart shows 587).
- FATE-H: **87%** ([Mistral](https://mistral.ai/news/leanstral-1-5/); independently reported by [The Decoder](https://the-decoder.com/mistrals-open-source-leanstral-1-5-aces-formal-math-benchmarks-and-catches-real-bugs-in-code/)).
- FATE-X: **34%** ([Mistral](https://mistral.ai/news/leanstral-1-5/); independently reported by [MarkTechPost](https://www.marktechpost.com/2026/07/03/mistral-ai-releases-leanstral-1-5-an-apache-2-0-lean-4-code-agent-model-solving-587-of-672-putnambench-problems/)).
- FLTEval: **pass@1 28.9; pass@8 43.2** ([Mistral](https://mistral.ai/news/leanstral-1-5/); independently tabulated by [MarkTechPost](https://www.marktechpost.com/2026/07/03/mistral-ai-releases-leanstral-1-5-an-apache-2-0-lean-4-code-agent-model-solving-587-of-672-putnambench-problems/)).
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no exact-model entry or score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- FLTEval: **28.9 pass@1 / 43.2 pass@8** ([Mistral](https://mistral.ai/news/leanstral-1-5/); [MarkTechPost](https://www.marktechpost.com/2026/07/03/mistral-ai-releases-leanstral-1-5-an-apache-2-0-lean-4-code-agent-model-solving-587-of-672-putnambench-problems/)).
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No verified MRCR, RULER, or GraphWalks retrieval score found. The official exact-model limit is 256K, with a recommendation of <=200K; PutnamBench test-time scaling is a token-budget curve, not a long-context retrieval benchmark ([Hugging Face model card](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)).

### Normalized scores (1–100)

- **Tool use: 78/100.** Function calling and a filesystem/Lean-LSP code-agent environment are verified, and the 57-repository case study demonstrates practical tool-mediated verification; the score is capped because no standardized terminal or tool-use leaderboard result was found.
- **Reasoning: 88/100.** Exact-model results are exceptional on miniF2F, PutnamBench, and FATE-H, with meaningful FLTEval evidence; the score is capped by the specialized formal-math setting, the much lower FATE-X result, and no verified GPQA/HLE/general intelligence score.
- **Context window: 75/100.** The verified 256K native window is above the methodology's 200K reference, but the official <=200K recommendation, 128K API output cap, and absent retrieval benchmark prevent a higher score.
- **Multimodal: 65/100.** The exact model accepts text and images and produces text, matching the methodology's image-input band; no audio/video input or non-text output is documented.
- **Coding: 73/100.** FLTEval reaches 28.9 pass@1 and 43.2 pass@8, and the code-verification case study found five previously unknown bugs; the score is capped by the lack of SWE-bench, LiveCodeBench, SciCode, or standard coding-agent scores.
- **Cost efficiency: 100/100.** Mistral announced a free API endpoint and the model card says the free plan is sufficient, although that endpoint is now deprecated and self-hosting is not cost-free.
- **Overall Score: 75.8/100.** Half-up mean of the five quality dimensions, `(78 + 88 + 75 + 65 + 73) / 5 = 75.8`, excluding cost; best fit is Lean 4 proof engineering and formal code verification rather than general-purpose coding evaluation.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-23
- Method: fresh public web research with exact-model searches, official Mistral documentation and model card review, benchmark-chart inspection, and independent coverage cross-checks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
