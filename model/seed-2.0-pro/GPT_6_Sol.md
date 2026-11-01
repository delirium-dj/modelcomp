# Seed2.0 Pro — findings by GPT 6 Sol

- Source: ByteDance Seed (`doubao-seed-2-0-pro-260215`)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed2.0 Pro
- **Short description:** ByteDance's proprietary Pro member of the Seed2.0 multimodal reasoning and agent family, optimized for complex workflows and visual/video understanding. Lite and Mini are separate family members; the late-April **Lite** audio upgrade is not a Pro feature ([ByteDance family page](https://seed.bytedance.com/en/seed2)).
- **Provider / access:** ByteDance's Chinese Volcengine Ark ID is `doubao-seed-2-0-pro-260215` ([Ark API documentation](https://www.volcengine.com/docs/82379/1494384)); the [international Seed page](https://seed.bytedance.com/en/seed2) links to a BytePlus playground ID `seed-2-0-pro-260328` and a Pro API listing. [LLM Gateway](https://llmgateway.io/models/seed-2-0-pro-260328) independently lists an OpenAI-compatible routed `seed-2-0-pro-260328`. The dated 260328 service is **not** asserted to be benchmark-identical to the vendor's 260215 evaluation.
- **Release / knowledge:** Seed2.0 series announced **February 14, 2026** ([ByteDance launch](https://seed.bytedance.com/en/blog/seed2-0-%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%B8%83)); the international 260328 serving ID has a March 28 date ([gateway](https://llmgateway.io/models/seed-2-0-pro-260328)). No Pro-specific knowledge cutoff verified.
- **IDs:** `doubao-seed-2-0-pro-260215` for the evaluated original checkpoint; `seed-2-0-pro-260328` for the later international serving ID, with no verified same-weights guarantee. No independently verified OpenCode Zen Free route for either.
- **Context window:** The [international 260328 gateway](https://llmgateway.io/models/seed-2-0-pro-260328) lists **262,144 tokens**. The [models.dev provider catalogue](https://models.dev/api.json) lists 256,000 tokens for the domestic 260215 route, with a 128,000 output cap; these are *route-reported* limits, not evidence of exact end-to-end recall at that length. No first-party prompt/output cap was established for the original evaluation.
- **Modalities:** Text, image and video inputs; text output, tool-calling and reasoning per [ByteDance's Pro results and model card](https://seed.bytedance.com/en/seed2). [LLM Gateway](https://llmgateway.io/models/seed-2-0-pro-260328) additionally advertises JSON/tool support on its 260328 route. Audio understanding is explicitly introduced for **Seed2.0 Lite**, not claimed for Pro.
- **Pricing (as of 2026-10-31):** [LLM Gateway's international 260328 ByteDance route](https://llmgateway.io/models/seed-2-0-pro-260328) lists **$0.50 input / $3 output / $0.10 cache-read per million tokens at ≤131,072 prompt tokens**, doubling to **$1 / $6 / $0.20** above that threshold. This is **gateway route pricing**, not a verified February 260215 or direct Volcengine tariff; no verified free API.
- **Architecture:** Proprietary closed weights; Pro parameter count and dense/MoE design not publicly verified in the [ByteDance model card](https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf).

### Raw benchmarks found

Agent / tool use:

- The [ByteDance Seed2.0 model card, p. 16, Table 11](https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf) reports **Terminal-Bench 2.0 55.8%** with Terminus2, **τ²-Bench retail 90.4% / telecom 94.2%**, **MCP-Mark 54.7%**, **BFCL-v4 73.4%**, **BrowseComp 77.3%**, **WideSearch 74.7%** and **DeepSearchQA 77.4%** for Seed2.0 Pro. The footnotes warn that competing vendors' published scores can differ substantially under these aligned settings; do not compare across unaligned reports.
- The [subsequent Seed family results page](https://seed.bytedance.com/en/seed2) labels the Pro column explicitly **0215**, giving **SkillsBench 42.3%**, **GDPval 54.4%**, **PaperBench 53.8%** and again **Terminal-Bench 2.0 55.8%**. The separate GUI OSWorld score on that page is for **Lite (0428)**, not Pro. No independently rerun exact-0215 agent benchmark could be verified on Vals or Artificial Analysis.

Reasoning / knowledge:

- [Vendor card, p. 9, Table 3](https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf): **GPQA Diamond 88.9%**, **HLE no-tool/text-only 32.4%**, **MMLU-Pro 87.0%**, **AIME 2026 94.2%**, **ARC-AGI-2 37.5%** and **FactScore 71.2%**. The same table shows a notably weaker **MRCR v2 eight-needle 54.0%**; strong knowledge-test results should not be extrapolated to long-context reliability. These are vendor-run, not independent repetitions.
- [Vendor card, p. 11, Table 5](https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf) claims **Putnam-200 35.5% pass@8** with Lean/Python tools; pass@8 is not a one-shot success rate.

Coding:

- [Vendor card, pp. 9 and 16](https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf): **LiveCodeBench v6 87.8%**, **SWE-bench Verified 76.5%**, **SWE-bench Pro 46.9%**, **SWE Multilingual 71.7%**, **SWE-Evo 8.5%**, **SciCode 48.5%** and **Terminal-Bench 2.0 55.8%**. [ByteDance's later family page](https://seed.bytedance.com/en/seed2) reports **NL2Repo-Bench 27.9%** for the same 0215 Pro column, indicating weaker end-to-end repository generation than short coding tests.

Long context / vision:

- [Vendor card, p. 9](https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf): **MRCR v2 eight-needle 54.0%**, **Graphwalks BFS <128K 68.9%**, **LongBench v2 at 128K 63.8%**. These are the closest published near-window proxies; none tests 256K near the claimed route limit.
- [Vendor card, pp. 13–14](https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf): **MMMU-Pro 78.2%**, **BabyVision 60.6%**, **VideoMMMU 86.9%**, **VideoReasonBench 77.8%** and **LongVideoBench 80.3%**. All are vendor-run and apply to the 0215 evaluation; do not silently carry them over to a later route revision.

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong vendor BrowseComp and τ²-Bench retail, capped by TB2.0 55.8, SkillsBench 42.3 and missing independent reruns.
- **Reasoning: 82/100.** Vendor GPQA 88.9/HLE 32.4, balanced against ARC-AGI-2 37.5, weak FactScore and unreplicated protocols.
- **Context window: 75/100.** Roughly 256K route tier with an observed 54% MRCR v2 and no verified near-cap retrieval or same-snapshot limit.
- **Multimodal: 82/100.** Images and video, with vendor MMMU-Pro 78.2/VideoReasonBench 77.8, but no Pro audio and no independent re-evaluation.
- **Coding: 75/100.** SWE-bench Verified 76.5/LiveCodeBench 87.8, limited by SWE-Pro 46.9, SWE-Evo 8.5 and NL2Repo 27.9.
- **Cost efficiency: 84/100.** Low short-prompt gateway input pricing but $3 output and double rates above 131K; original first-party pricing not verified.
- **Overall Score: 79/100.** Half-up mean (80 + 82 + 75 + 82 + 75) / 5 = 78.8; useful candidate for multimodal workflows after verifying the exact deployed snapshot.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-31
- Method: Direct review of the first-party release and original PDF's model-specific comparison tables against the newer vendor family page, gateway serving/pricing, and third-party route metadata. No independent exact-snapshot benchmark was located; figures above are explicitly labelled vendor-run, and the 260328 route is not scored as if it were proven identical to 260215.
- Reference URLs:
  - [ByteDance Seed2.0 launch](https://seed.bytedance.com/en/blog/seed2-0-%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%B8%83)
  - [ByteDance Seed2.0 Pro technical model card (PDF)](https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf)
  - [ByteDance Seed2.0 family comparison, version-labelled](https://seed.bytedance.com/en/seed2)
  - [Volcengine Ark API documentation mentioning the 260215 ID](https://www.volcengine.com/docs/82379/1494384)
  - [LLM Gateway international 260328 context and prices](https://llmgateway.io/models/seed-2-0-pro-260328)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
