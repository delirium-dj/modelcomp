# Seed 2.0 Pro — findings by GPT 6 Astra

- Source: ByteDance Seed / Seed2.0 Pro
- Date: 2026-10-04 (UTC)
- Methodology: [model comparison](../../model-comparison.md)
- Cross-model log: [findings](../../model-findings.md)

## Model card

Seed2.0 Pro is ByteDance's proprietary multimodal reasoning model, launched in the Seed2.0 family on February 14, 2026. This report uses the **Pro (0215)** benchmark column, not Lite or Mini. Architecture size and a reliable knowledge cutoff were not verified. [Official family record](https://seed.bytedance.com/en/seed_model_portfolio).

BytePlus markets the international service as Dola Seed 2.0 Pro for images, video, documents, browser use, and computer use. These are input-understanding and tool-orchestration capabilities, not evidence of native video generation by this language model. [BytePlus announcement](https://www.byteplus.com/en/blog/dola-seed-2-0-pro?t=Effects).

The later international ID `seed-2-0-pro-260328` has a documented **256K context**. Listed maximum output including reasoning varies between deployment rows (128K and 256K); do not assume both apply to one endpoint. Exact weight identity between 0215 and 260328 is unverified, so the latter's API specifications are deployment guidance rather than evidence of identical benchmark performance. [Provider model list](https://docs.byteplus.com/pt/docs/modelark/model-list).

BytePlus's product page advertises $0.50 input/$3 output per million tokens, while indexed ModelArk pricing lists a $0.25/$1.50 short-prompt rate for the later snapshot. Pricing is therefore provisional and deployment-dependent. No perpetual free Zen ID was verified. [Product rates](https://www.byteplus.com/en/product/modelark), [detailed pricing](https://docs.byteplus.com/id/docs/modelark/model-pricing?redirect=1). Volcengine's AI data-platform documentation says its 2.0 Pro service ended August 8, 2026; this should not be generalized to every international endpoint. [Service notice](https://docs.volcengine.com/docs/aidap/Billing_items_and_prices_of_large_model_access?lang=en).

### Raw benchmarks found

Agent / tool use:

- Pro (0215): **Tob-Agent 52.6%**, **FinSearchComp 70.2%**, **Terminal Bench 2.0 55.8%**.
- Exact-model Tau3-Banking, GDPval-AA, ClawProBench, and MCP-Atlas: no verified public score found in the sources used here.

Reasoning / knowledge:

- **GPQA Diamond 88.9%**, **HLE text-only without tools 32.4%**, **BeyondAIME 86.5%**, **FrontierSci-olympiad 74.0%**.
- Full multimodal HLE, CritPt, and AA-Omniscience: no verified public score found in the sources used here.

Coding:

- **SWE Multilingual 71.7%**, **SWE-bench Pro 46.9%**, **NL2Repo-Bench 27.9%**, **PaperBench 53.8%**.
- Exact-model LiveCodeBench and SciCode: no verified public score found in the sources used here.

These are vendor-reported results from the explicitly labeled Pro (0215) column on the [Seed2.0 evaluation page](https://seed.bytedance.com/en/seed2), not independent replications or measurements of the newer international snapshot.

Long context:

- No verified exact-model MRCR or RULER retrieval score found. Advertised multimodal long-context leadership is not treated as a numerical measurement.

### Normalized scores (1–100)

- **Tool use: 68/100.** Useful terminal and enterprise-agent performance, with limited independent coverage.
- **Reasoning: 82/100.** Strong scientific and mathematical results; text-only HLE limits comparability.
- **Context window: 78/100.** Provisional 256K deployment-based rating, without exact-snapshot retrieval validation.
- **Multimodal: 85/100.** Broad image, video, and document understanding, with text output.
- **Coding: 74/100.** Good multilingual repair, tempered by more demanding repository and Pro results.
- **Cost efficiency: 90/100.** Provisional paid-rate mapping; regional pricing and availability need endpoint verification.
- **Overall Score: 77/100.** Half-up mean: (68 + 82 + 78 + 85 + 74)/5 = 77.4; cost excluded. Best fit is multimodal analysis with deployment-specific validation.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores.
