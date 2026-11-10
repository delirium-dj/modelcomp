# Leanstral 1.5 — findings by GPT-6.1 Sol

- Source: Mistral AI / `mistralai/Leanstral-1.5-119B-A6B`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md); current Overall contract in `../../RULES.md`
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Leanstral 1.5
- **Short description:** Mistral's post-trained Lean 4 proof-engineering model for theorem proving, formalization, and code verification. Its verified image input means it is not text-only, but its published quality evidence is predominantly formal mathematics rather than general multimodal assistance.
- **Provider / access:** Downloadable weights for local vLLM; historical Mistral Chat Completions/Agents/Conversations service. The current [native model card](https://docs.mistral.ai/models/model-cards/leanstral-1-5) explicitly marks it deprecated/phasing out with deprecation date 2026-09-29. No current authenticated hosted access was tested.
- **Release / knowledge:** Native card dates the release milestone to 2026-06-30; the [announcement](https://mistral.ai/news/leanstral-1-5) is dated 2026-07-02. Knowledge cutoff not verified.
- **IDs:** Weights `mistralai/Leanstral-1.5-119B-A6B`; current deprecated native record `labs-leanstral-1-5`; announcement also cites `leanstral-1-5`. No matching current Zen Free ID or OpenRouter route found. Different API naming conventions are not separately rated weights.
- **Context window:** Native/HF 256K and native 128K output; publisher recommends no more than 200K context for actual use. Multi-million-token proof runs employ compaction, not multi-million-token single requests.
- **Modalities:** Exact HF card specifies text/image inputs and text output; optional `none`/`high` reasoning, native functions and structured outputs. No native audio/video or non-text output verified; no exact image-accuracy benchmark found.
- **Pricing (as of 2026-11-10):** Historical announcement/README advertised a free Labs API with opt-in, but the current native card is deprecated and no surviving free entitlement was verified. Weights are Apache 2.0; self-host compute is not $0. No current hosted tariff or model-specific current retention policy verified.
- **Architecture:** 119B total / 6.5B active MoE, 128 experts with four active; mid-training, supervised fine-tuning and RL using CISPO; exact updated checkpoint based on `mistralai/Leanstral-2603`.

### Raw benchmarks found

The following are publisher-reported **Leanstral 1.5** results in the [July announcement](https://mistral.ai/news/leanstral-1-5). Formal compiler/verifier success is distinguished from general-purpose coding, tool use, and image accuracy.

Agent / tool use:

- FLTEval **pass@1: 28.9% / pass@8: 43.2%**, real proof-engineering tasks based on Fermat's Last Theorem repository pull requests. Eight attempts are not single-attempt reliability.
- Code-verification pipeline over **57 repositories** flagged **47 violated properties**, of which **11** indicated genuine bugs and **5** were previously unreported. This is a selected formal-verification study, not 11/57 general software-engineering accuracy.
- Terminal-Bench, Tau3/Tau2, GDPval-AA, Claw-Eval/ClawProBench, Toolathon, MCP-Atlas, and SWE Atlas QnA: no verified exact-model score found.

Reasoning / knowledge:

- miniF2F: **100%** on validation and test, per publisher; attempt-budget details are not assumed to be single-shot.
- PutnamBench: **587/672 problems solved**, **pass@8 with up to 4M tokens per attempt**; not a 4M single-request context or an ordinary competition-math pass@1 score.
- FATE-H **87%** and FATE-X **34%** in the announcement's percentage labels; its prose also describes 87 and 34 solved problems, which is retained without inventing extra task counts.
- GPQA Diamond, HLE, LCR/MLCR, CritPt, AA Intelligence Index, and Omniscience accuracy/hallucination rate: no verified exact-model public score found.

Coding:

- Exact evidence is FLTEval **28.9% pass@1 / 43.2% pass@8** and the formal Rust/Lean verification study above.
- SWE-bench Verified/SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench, and DeepSWE: no verified score found. Lean proof engineering is not silently substituted for broad application coding.

Long context:

- AVL-tree verification case study ran for **over 2.7M tokens across 22 compactions**; it demonstrates a long agent workflow, not full-window retrieval accuracy.
- No exact MRCR/RULER/GraphWalks result found.

Cost/perception evidence:

- Publisher estimates roughly **$4 per Putnam problem** at its quoted high-budget protocol; this is a compute/protocol estimate, not a current native API tariff.
- Image input is verified in the exact [HF model card](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B/raw/main/README.md), but no exact visual-quality benchmark was found.

### Normalized scores (1–100)

- **Tool use: 75/100.** FLTEval and repository verification establish practical compiler/file-tool workflows; a narrow proof harness and absent general tool suites cap transfer to ordinary agents.
- **Reasoning: 87/100.** Strong formally checked miniF2F/Putnam/FATE results support technical reasoning; large pass@8 budgets and absent broad knowledge/science tests cap general-purpose claims.
- **Context window: 70/100.** Advertised 256K reaches the middle capacity tier, but the publisher's 200K recommendation and absence of retrieval measurements limit effective-context confidence.
- **Multimodal: 60/100.** Verified native image input reaches the image-coverage tier; no measured exact visual accuracy, audio/video input, or non-text output supports a higher grade.
- **Coding: 79/100.** Exact proof-engineering and formal bug-discovery results support specialized code verification; no broad repository-repair/contest suite justifies a frontier general-coding score.
- **Cost efficiency: 80/100.** Provisional self-host resource/value interpretation for 6.5B active compute with 119B resident weights and expensive long proof runs; no current tariff was verified, and deprecated historical free API access is not rated as present-day $0 inference.
- **Overall Score: 74/100.** Half-up mean: (75 + 87 + 70 + 60 + 79) / 5 = 74.2, rounded to 74; cost excluded. Best fit is specialized Lean proof engineering; generic-axis comparisons remain less certain than its formal-math results.

---

## Signature

- Provided by: **GPT 6.1 Sol (agentrouter/gpt-6.1-sol)** — 2026-11-10
- Method: Fresh primary announcement, current native lifecycle card, and exact checkpoint-card verification, plus live gateway checks. No peer findings read. Pass@1/pass@8, compaction versus context, native image support, and historical free access versus current deprecation are separated. Scores are independent normalized interpretations; configured search returned HTTP 402, so direct sources and Bing were used.
- Reference URLs:
  - [Exact-model launch, evaluations, budgets, and case studies](https://mistral.ai/news/leanstral-1-5)
  - [Current native model/lifecycle record](https://docs.mistral.ai/models/model-cards/leanstral-1-5)
  - [Exact updated weights, architecture, image support, and recommended limits](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B/raw/main/README.md)
  - [Live OpenRouter catalog](https://openrouter.ai/api/v1/models)
  - [Live OpenCode Zen catalog](https://opencode.ai/zen/v1/models)
- Future sources: Preserve this report and add separately signed evidence; do not conflate proof-specialist scores with unrelated benchmarks.
