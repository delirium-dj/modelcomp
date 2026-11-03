# GPT-6.1 Terra — findings by GPT-5.6 Sol

- Source: OpenAI/GPT-6.1 Terra (`gpt-6.1-terra`)
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI's fast, efficient GPT-6.1 model for visual reasoning, computer use, writing, and software engineering, priced at half of GPT-6.1 Sol's base token rates.
- **Provider / access:** OpenAI API (`v1/responses` and Chat Completions); tool calling requires Responses API. Also available in ChatGPT Work and Codex, not regular Chat.
- **Release / knowledge:** Released 2026-10-26; knowledge cutoff 2026-06-01.
- **IDs:** `openai/gpt-6.1-terra`; no free Zen ID verified.
- **Context window:** 1,050,000 total; 922,000 max input and 128,000 max output.
- **Modalities:** Text and image input; text output; reasoning, function calling, structured output, web/file search, code interpreter, hosted shell, computer use, MCP, and image generation tools. Native audio/video input is unsupported.
- **Pricing (as of 2026-11-03):** $1 input / $0.05 cached / $5 output per 1M for ≤272K input; above 272K, $2/$0.10/$7.50 applies to the full request. Cache writes cost $1.25 (30m) or $2.50 (12h), doubled for long context.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **50.3%** at max effort (OpenAI, repeated by LiteLLM).
- OSWorld 2.1 and Agents' Last Exam: OpenAI reports Terra at medium beats GPT-5.6 Terra's best OSWorld score and gains 15 points on ALE at roughly one-third cost, but the searchable release excerpt does not expose absolute values.
- Vending-Bench 2: **$9,107** best score (Epoch); materially behind the strongest comparator despite good computer-use positioning.

Reasoning / knowledge:

- GPQA Diamond: **94%** (Epoch scorecard).
- FrontierMath Tiers 1–3 v2: **91%**; Tier 4 v2: **93%** (Epoch).
- SimpleQA Verified: **57%**, below GPT-6 Astra and several competitors; OpenAI's internal error-inducing prompt rate is **16.7% at low** and **4.3% at max**.
- Epoch Capabilities Index: **168, #4/256**.

Coding:

- Terminal-Bench 4.0: **50.3%** at max (OpenAI).
- FrontierCode 2.0-AA: **42.3%, #4/89** in BenchLeader's sourced view.
- OpenAI states a substantial software-engineering improvement over GPT-5.6 Terra, but recommends Sol/Astra for the hardest coding; this tempers the coding score.

Long context:

- 1.05M declared capacity; no verified full-window retrieval score found in the reviewed sources.

Multimodal:

- MMMU-Pro: OpenAI reports near GPT-6 Astra and GPT-6.1 Sol at lower cost; Epoch reports Furniture Assembly Benchmark **79%**.

### Normalized scores (1–100)

- **Tool use: 90/100.** Broad first-party tool support and strong computer-use positioning are offset by 50.3 Terminal-Bench and mixed Vending-Bench performance.
- **Reasoning: 91/100.** GPQA 94, FrontierMath 91/93, and ECI #4 are frontier-level; SimpleQA 57 shows a knowledge/factuality weakness.
- **Context window: 98/100.** Verified 1.05M total with a large 128K output budget, capped for lack of independent full-window retrieval evidence.
- **Multimodal: 88/100.** Strong image reasoning and computer use, but no native audio/video input and text-only output.
- **Coding: 88/100.** FrontierCode 42.3 and improved software engineering are strong, while Terminal-Bench 50.3 remains below top coding specialists.
- **Cost efficiency: 94/100.** $1/$5 with $0.05 cache reads is excellent for frontier capability, though the >272K full-request surcharge must be managed.
- **Overall Score: 91/100.** Half-up mean of the five quality dimensions; best for cost-sensitive visual/computer-use agents and general engineering rather than the hardest autonomous coding.

---

## Signature

- Provided by: **GPT-5.6 Sol (openai/gpt-5.6-sol)** — 2026-11-03
- Method: public internet research across OpenAI's release, API model card, safety addendum, and independent Epoch, BenchLeader, LiteLLM, and review sources; relative vendor claims were not converted into invented absolute scores.
- Reference URLs:
  - [OpenAI introduction](https://openai.com/index/introducing-gpt-6-1-terra)
  - [OpenAI API model card](https://developers.openai.com/api/docs/models/gpt-6.1-terra)
  - [OpenAI pricing](https://developers.openai.com/api/docs/pricing)
  - [OpenAI safety addendum](https://deploymentsafety.openai.com/gpt-6-1-terra)
  - [Epoch AI GPT-6.1 Terra](https://epoch.ai/models/gpt-6-1-terra)
  - [BenchLeader GPT-6.1 Terra](https://www.benchleader.com/models/gpt-6-1-terra)
- Future sources: add a new file next to this one using the same headings.
