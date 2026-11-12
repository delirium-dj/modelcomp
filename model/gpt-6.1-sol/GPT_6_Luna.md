# GPT-6.1 Sol — findings by GPT-6 Luna

- Source: OpenAI/gpt-6.1-sol
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI proprietary GPT-6.1 Sol model. Official pricing/docs distinguish its API SKU from GPT-6 Sol and report lower standard pricing than the original GPT-6 Sol tier.
- **Provider / access:** OpenAI API model ID `gpt-6.1-sol`; official docs list reasoning effort support.
- **Release / knowledge:** October 2026 current documentation; exact release date and knowledge cutoff not verified.
- **IDs:** `openai/gpt-6.1-sol`.
- **Context window:** no verified exact-model context specification found in reviewed sources.
- **Modalities:** no verified exact-model modality details found.
- **Pricing (as of 2026-10-28):** Official standard short-context input $2, output $10, cached input $0.10 per 1M tokens; long-context input/output $4/$15. Fast mode is priced at 2x standard where available.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Artificial Analysis leaderboard data lists effort-specific results. Effort variants should not be compared as if they were fixed identical configurations.

Agent / tool use:

- GDPval-AA: 54.8% Max, 52.0% Xhigh, 50.6% High, 47.5% Medium, 40.8% Low (Artificial Analysis leaderboard via OnlySOTA).
- Terminal-Bench 4.0: 56.1% Max, 54.0% Xhigh, 51.5% High, 48.0% Medium, 30.8% Low (same source).

Reasoning / knowledge:

- Humanity's Last Exam: 52.9% Max, 52.6% Xhigh, 51.4% High, 49.9% Medium, 47.4% Low (same source).
- AA-LCR: 83.0% Max, 79.7% Xhigh, 82.3% High, 83.3% Medium, 84.0% Low (same source; higher is better per listing).

Coding:

- SciCode: 54.2% Max, 55.7% Xhigh, 55.8% High, 53.2% Medium, 53.2% Low (same source).
- no verified exact-model SWE-bench result found in sources reviewed.

Long context:

- no verified exact-model long-context retrieval result found.

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval-AA and Terminal-Bench results are strong; capped by secondary-source attribution and configuration variability.
- **Reasoning: 89/100.** HLE results and broad AA-LCR scores support strong reasoning; no primary score card was retrieved.
- **Context window: 50/100.** Exact context capacity and retrieval quality were not verified.
- **Multimodal: 50/100.** Exact modalities were not verified.
- **Coding: 86/100.** SciCode is consistently strong across listed efforts; no confirmed SWE-bench result.
- **Cost efficiency: 82/100.** $2/$10 per million standard short-context rates are moderate for these reported capabilities; long-context and Fast pricing increase cost.
- **Overall Score: 73/100.** Half-up mean of the five quality dimensions (72.6, rounded to 73); best fit is capable general/tool work where cost is below the GPT-6 Astra tier.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent public web searches; scores preserve effort-specific configuration and distinguish leaderboard evidence from official product/pricing specifications.
- Sources: [OpenAI pricing](https://developers.openai.com/api/docs/pricing); [OpenAI model docs](https://developers.openai.com/api/docs/models); [OnlySOTA Artificial Analysis leaderboard](https://onlysota.ai/leaderboards/artificial-analysis).

---

## Archived research pass — `GPT_6_Luna.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GPT_6_Luna.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## GPT-6.1 Sol — findings by ChatGPT 6 Luna

- Source: OpenAI (`gpt-6.1-sol`)
- Archived date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Archived model card omitted — own-twin consolidation 2026-11-12.
> Every archived field value was identical to, or an older or vaguer duplicate of, the active card above.

## Raw benchmarks found

Results identify the evaluated reasoning effort and benchmark version where available. Different efforts, versions, and harnesses must not be treated as interchangeable.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found. Related but distinct benchmark: Terminal-Bench 4.0, 56% (Artificial Analysis, max effort); Vals independently reports 55.05%, rank 6/45, max effort. Neither is a Terminal-Bench 2.1 score.&#x20;

  [image](https://www.google.com/s2/favicons?domain=https://artificialanalysis.ai\&sz=32)

  Artificial Analysis

  +1

- Tau3-Banking / Tau2-Bench: 40.0% (Tau3 Banking; OpenRouter single-model baseline, GPT-6.1 Sol high effort). Tau2-Bench: no verified public score found.&#x20;

  [image](https://www.google.com/s2/favicons?domain=https://openrouter.ai\&sz=32)

  OpenRouter

- GDPval-AA: 1,575 Elo (Artificial Analysis GDPval-AA v2.1, max effort). High-effort score: 1,486 Elo.&#x20;

  [image](https://www.google.com/s2/favicons?domain=https://artificialanalysis.ai\&sz=32)

  Artificial Analysis

  +1

- Claw-Eval / ClawProBench: no verified public score found.

- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: 60.2% on SWE Atlas QA (OpenRouter baseline, high effort; fourth-highest listed result among 17). Toolathon and MCP-Atlas: no verified public score found.&#x20;

  [image](https://www.google.com/s2/favicons?domain=https://openrouter.ai\&sz=32)

  OpenRouter

- OSWorld 2.0: 71.4% partial reward (OpenAI, offline set v2026.08.08, max reasoning effort; rank 3/24 in BenchmarkList). This is not the strict binary-completion rate.&#x20;

  [image](https://www.google.com/s2/favicons?domain=https://openai.com\&sz=32)

  OpenAI

  +1

- AutomationBench-AA: 66.6% partial score (Artificial Analysis, xhigh effort; rank 7/26). Separate OpenAI AutomationBench 1.0.6 evaluation: 36.1% task success, max effort.&#x20;

  [image](https://www.google.com/s2/favicons?domain=https://benchmarklist.com\&sz=32)

  BenchmarkList



Reasoning / knowledge:

- GPQA Diamond: 95.4% (Epoch AI evaluation, max effort, GPQA Diamond, 198-question Inspect harness; rank 4 in the aggregated Epoch-based leaderboard).&#x20;

  [image](https://www.google.com/s2/favicons?domain=https://www.llmreference.com\&sz=32)

  LLM Reference

  +1

- HLE: 52.9% (Humanity's Last Exam, Artificial Analysis, max effort; rank 12/478).&#x20;

  [image](https://www.google.com/s2/favicons?domain=https://benchmarklist.com\&sz=32)

  BenchmarkList

- LCR / MLCR: 84.0% (Artificial Analysis AA-LCR v1.1, best reported configuration; rank 10/408). MLCR-AA: no verified public score found.&#x20;

  [image](https://www.google.com/s2/favicons?domain=https://benchmarklist.com\&sz=32)

  BenchmarkList

- CritPt: 31.7% (Artificial Analysis, max effort, physics-reasoning accuracy; rank 4/28).&#x20;

  [image](https://www.google.com/s2/favicons?domain=https://benchmarklist.com\&sz=32)

  BenchmarkList

- Artificial Analysis Intelligence Index / BenchLM overall: 51.8 / rank 18 of 427 (Artificial Analysis Intelligence Index; BenchmarkList snapshot). BenchLM overall: no verified public score found.&#x20;

  [image](https://www.google.com/s2/favicons?domain=https://benchmarklist.com\&sz=32)

  BenchmarkList

- Omniscience Accuracy / Hallucination Rate: no verified public score found for the two separate percentages. Verified AA-Omniscience Index: 41.53 points (max effort; rank 6/30). This index is not an accuracy percentage or hallucination-rate percentage.&#x20;

  [image](https://www.google.com/s2/favicons?domain=https://benchmarklist.com\&sz=32)

  BenchmarkList



Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found.

- LiveCodeBench: no verified public score found.

- SciCode / AA-SciCode: 55.8% (Artificial Analysis SciCode, high-effort evaluation; rank 24/296).&#x20;

  [image](https://www.google.com/s2/favicons?domain=https://benchmarklist.com\&sz=32)

  BenchmarkList

- Vibe Code Bench: 88.93% (Vals AI Vibe Code Bench v1.1; rank 8/110, evaluated model configuration with max reasoning effort).&#x20;

  [image](https://www.google.com/s2/favicons?domain=https://www.vals.ai\&sz=32)

  Vals AI

- DeepSWE / Coding Index / other: 75.2% on DeepSWE 1.1 (OpenAI-reported, high effort, Pass\@1; rank 3/52 in BenchmarkList). Separately, OpenRouter reports 70.8% under its own Deep SWE harness at high effort; these are not interchangeable measurements. SWE-Marathon: 68/160 successful trials (max effort; rank 14/33). A separately verified unified Coding Index: no verified public score found.&#x20;

  [image](https://www.google.com/s2/favicons?domain=https://benchmarklist.com\&sz=32)

  BenchmarkList

  +2



Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval reported with a verified window length and score for this exact model.
- Related evidence: AA-LCR v1.1 84.0% (rank 10/408), but no verified 512K-token-or-longer retrieval accuracy accompanies that result. The 1,050,000-token context capacity is an official specification, not proof of perfect retrieval across that length.&#x20;

  [image](https://www.google.com/s2/favicons?domain=https://benchmarklist.com\&sz=32)

  BenchmarkList

  +1



> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
