# Kimi K3.1 Pro — findings by GPT 6 Sol

- Source: Moonshot AI (`kimi-k3.1-pro`)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's separately post-trained successor to Kimi K3, built for long-horizon coding, agentic work, and visual/document reasoning. The `-highspeed` endpoint is a faster, more expensive serving variant, not a separate checkpoint ([Moonshot launch](https://www.kimi.ai/blog/kimi-k3-1-pro), [API guide](https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart)).
- **Provider / access:** Moonshot's `https://api.moonshot.ai/v1/chat/completions` accepts the `kimi-k3.1-pro` model ID via the OpenAI-compatible Chat Completions API; the model is also available in Kimi, Kimi Work and Kimi Code ([API guide](https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart)). The API guide requires a successful top-up for access.
- **Release / knowledge:** October 23, 2026 ([Artificial Analysis](https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks), [Vals](https://www.vals.ai/models/kimi_kimi-k3.1-pro)); knowledge cutoff not publicly verified.
- **IDs:** `kimi-k3.1-pro` (first-party); `kimi-k3.1-pro-highspeed` is the same model at a different serving speed and price, not an additional scored model ([Moonshot](https://platform.kimi.ai/)).
- **Context window:** 1,048,576 combined tokens per [Moonshot pricing documentation](https://platform.kimi.ai/docs/pricing/chat); the [API guide](https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart) says `max_completion_tokens` defaults to 131,072 and can be configured higher, but does not establish perfect retrieval near the full context limit. [Vals](https://www.vals.ai/models/kimi_kimi-k3.1-pro) lists a 1,048,576 maximum-output setting in its model profile; that setting is not a measured long-context retrieval result.
- **Modalities:** Text and images in, text out; the [first-party API guide](https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart) additionally demonstrates file-backed video input. Always-on reasoning (`low`, `high`, `max` effort), tool calling and strict JSON-schema output; neither native audio input nor generated media output is confirmed. [Artificial Analysis](https://artificialanalysis.ai/models/kimi-k3-1-pro) describes only its tested text/image input.
- **Pricing (as of 2026-10-31):** Moonshot API **$2 input / $10 output / $0.20 cache hit per million tokens**; cache writes are charged separately, and `kimi-k3.1-pro-highspeed` is **$4/$20** at roughly 2–3× speed ([Moonshot API pricing](https://platform.kimi.ai/docs/pricing/chat), [API guide](https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart)). No zero-cost API tier is verified. Independent [Artificial Analysis](https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks) found around $1.98 per task on its October 23 index despite the lower token price than K3, because K3.1 used more output tokens.
- **Architecture:** Moonshot calls it a 3T-class post-trained derivative of Kimi K3 with additional RL; [Artificial Analysis](https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks) lists 2.8T total / 104B active parameters. Despite Moonshot's *open-weight* positioning, the K3.1 Pro weights and license had **not** been published by October 31; the vendor promises a release by November 4 ([Moonshot launch](https://www.kimi.ai/blog/kimi-k3-1-pro)). Do not describe the current checkpoint as downloadable.

### Raw benchmarks found

Agent / tool use:

- **Terminal-Bench 4.0:** **65.7%**, Moonshot/Claude Code harness, `max` effort ([vendor launch](https://www.kimi.ai/blog/kimi-k3-1-pro)); **67%** in [Artificial Analysis's October 23 independent evaluation](https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks), versus **63.64% ±1.75** in [Vals' separate Moonshot-API run](https://www.vals.ai/models/kimi_kimi-k3.1-pro) with profile settings of `max` effort, temperature 1, top-p .95 and 1,048,576 max output. Vals cautions that individual benchmarks can use different parameters. Different harnesses and evaluation settings make these distinct results, not interchangeable replications.
- **AutomationBench-AA:** **73%**, up from 58% for K3; **GDPval-AA:** **1,846 Elo**, third on the October 23 evaluation ([Artificial Analysis](https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks)). [Vals Index v2.2](https://www.vals.ai/models/kimi_kimi-k3.1-pro): **62.52% ±1.14**, with Finance Agent v2.1 **61.49%**, but Legal Research Bench **37.50%** and Tax Agent Bench **24.87%**. These domain-specific weaknesses limit generalization from agentic wins.
- **Kimi Code Bench 3.0 Long-horizon:** **61.2%**, Moonshot's internal Claude-Code-harness benchmark versus K3's 55.95%; proprietary test, not independently replicated ([Moonshot](https://www.kimi.ai/blog/kimi-k3-1-pro)). No verified public Claw-Eval or Tau3 score found for this exact ID.

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index:** **55** on the [October 23 launch-era index](https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks), but **46** on the [current v5.0 model page](https://artificialanalysis.ai/models/kimi-k3-1-pro); **do not read this as a nine-point model regression**: the index version and constituent benchmarks changed on October 27. Its October 23 Humanity's Last Exam result was **52%**, CritPt **25%**, and AA-Omniscience accuracy **51%** with **44%** hallucination rate ([AA launch evaluation](https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks)).
- **ProofBench v1.1:** **91.00% ±2.88**, but Terminal-Bench-Science **31.43% ±5.59**, under [Vals' distinct independent protocols](https://www.vals.ai/models/kimi_kimi-k3.1-pro). [Moonshot's internal Hallu Bench Hard](https://www.kimi.ai/blog/kimi-k3-1-pro) reports claim-level hallucination falling from K3's 23.4% to K3.1 Pro's **8.3%**; unlike AA's **44%** hallucination rate, this uses a vendor stress set and different metric, not a directly conflicting score.
- **GPQA Diamond:** no exact-ID independently verified public result found in the checked AA/Vals pages; do not transplant K3's result.

Coding:

- **SciCode:** **61%** in [Artificial Analysis's October 23 evaluation](https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks); [Vals Vibe Code Bench v1.1](https://www.vals.ai/models/kimi_kimi-k3.1-pro) **84.89% ±2.95**. Moonshot's **65.7% Terminal-Bench 4.0** and Vals' **63.64%** above provide separate real-agent coding evidence.
- **KingBench coding study:** **53.7%**, sixth of 11 according to [MindStudio's independent-study review](https://www.mindstudio.ai/blog/kimi-k3-1-pro-pricing-cost), versus Opus 5.5 **57.8%** and GPT-6 Astra **56.5%**. This contrasts with Moonshot's vendor-side claim of beating Astra on its own Terminal-Bench 4.0 setup; the benchmarks are not the same task set. Direct SWE-bench Verified / DeepSWE values for the K3.1 Pro endpoint were not independently verified here.

Long context:

- **No verified public million-token needle-retrieval or MRCR score found** for this exact ID. The 1M advertised capacity and Vals' maximum-output configuration are not evidence of reliable retrieval at the limit ([Moonshot API](https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart), [Vals](https://www.vals.ai/models/kimi_kimi-k3.1-pro)).

### Normalized scores (1–100)

- **Tool use: 92/100.** Independent AA's 1,846 GDPval Elo and 73% AutomationBench plus AA/Vals Terminal-Bench results support strong agents; lower Vals legal/tax results and missing Tau3 cap the score.
- **Reasoning: 89/100.** AA's launch-era HLE 52% and SciCode 61% are strong, but the v5 index of 46, AA hallucination rate and weak terminal-science result argue against treating vendor HLE claims as universal.
- **Context window: 96/100.** The API supports 1M combined tokens, but no independently verified near-limit retrieval result justifies a perfect score.
- **Multimodal: 84/100.** Image and vendor-documented video input, PDF/document workflows and text output; no confirmed native audio or non-text output, and AA tested only text/image.
- **Coding: 91/100.** Independent AA/Vals terminal-agent and Vals vibe-code results are high; the weaker KingBench run and absence of directly comparable SWE-bench results keep it below the very top tier.
- **Cost efficiency: 62/100.** $2/$10 per million tokens is below some closed flagships but expensive next to efficient Flash models; AA's token-heavy tasks and separate cache-write charges erode the headline discount.
- **Overall Score: 90/100.** Half-up mean of (92 + 89 + 96 + 84 + 91) / 5 = 90.4; a strong long-context coding/agent choice when independent task results matter more than the vendor's best-case leaderboard.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-31
- Method: Independent public-web research across Moonshot's API and launch documents, Artificial Analysis's dated and current index versions, Vals' separately run benchmarks, and independent coding-review evidence; normalized scores are interpretations, not official vendor scores.
- Reference URLs:
  - [Moonshot Kimi K3.1 Pro launch and evaluation notes](https://www.kimi.ai/blog/kimi-k3-1-pro)
  - [Moonshot Kimi K3.1 Pro API guide](https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart)
  - [Moonshot pricing and available API IDs](https://platform.kimi.ai/docs/pricing/chat)
  - [Artificial Analysis launch-era independent evaluation](https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks)
  - [Artificial Analysis v5.0 model profile](https://artificialanalysis.ai/models/kimi-k3-1-pro)
  - [Vals AI model evaluation and October 24 methodology](https://www.vals.ai/models/kimi_kimi-k3.1-pro)
  - [MindStudio review of independent KingBench coding run](https://www.mindstudio.ai/blog/kimi-k3-1-pro-pricing-cost)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
