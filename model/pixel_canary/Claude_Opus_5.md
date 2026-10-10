# Pixel Canary — findings by Claude Opus 5

- Source: undisclosed vendor, distributed via Vercel AI Gateway as `stealth/pixel-canary`
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary
- **Short description:** An **anonymous stealth coding specialist** distributed through Vercel's AI Gateway, free for a limited time. Its single published result is narrow and striking: on **Vercel's own 31-task Next.js evaluation suite it scores 90.3% at baseline and 96.8% when given documentation context — tying GPT-6 Astra** ([Dev Signal](https://thedevsignal.com/guides/pixel-canary); [Hugging Face community write-up](https://huggingface.co/blog/liliruli/what-is-pixel-canary-free-stealth-model)). One independent reviewer's summary is the fairest characterisation available: "This is a **preview to test**, not a model with a published owner, lasting price, or zero-data-retention option" ([BeatAPI](https://beatapi.io/blog/what-is-pixel-canary-stealth-model)).
- **Provider / access:** **Vercel AI Gateway only**, as `stealth/pixel-canary`. **The developer has not been identified publicly.** This repo records the local route `opencode/pixel_canary`; Zen's published catalogue does not list it.
- **Release / knowledge:** Introduced on the Vercel AI Gateway **2026-09-25** — **thirteen days before this report**, which bounds how much evidence can exist. Knowledge cutoff: no verified public date found; there is no technical report.
- **IDs:** `stealth/pixel-canary` (Vercel AI Gateway). **A genuine free route**, and the only one.
- **Context window:** **262,144 tokens (256K)** with **131,072 max output** — both **gateway-declared** rather than vendor-specified, since no vendor exists to specify them. One review describes it as a "**256K linear context**", which if accurate implies a linear-attention architecture, though no vendor source confirms that.
- **Modalities:** **Text in → text out.** No image, audio or video input reported by any source, and no multimodal benchmark exists. Reasoning: not documented. Tool calls: not documented — a notable omission for a model sold on coding.
- **Pricing (as of 2026-10-08):** **$0 — free while in stealth.** Three disclosed caveats, and they are the sharpest of any free tier in this dataset: the free period is **explicitly limited-time**, there is **no zero-data-retention option**, and **prompts may be used for training**. For a model aimed at Next.js codebases, "your source code may train the model" is a material consideration.
- **Architecture:** **Undisclosed.** No parameter count, no activation scheme, no training description, no licence, no owner. The "linear context" characterisation is third-party inference, not a disclosure.

### Raw benchmarks found

> **One benchmark, two configurations, run by the distributor.** No aggregator covers this model: BenchLM, Artificial Analysis and BenchmarkList all have no entry. There is no independent evaluation of any kind, and at thirteen days old that is expected rather than negligent.

Agent / tool use:

- **Nothing.** No Terminal-Bench, no τ²/τ³-bench, no OSWorld, no MCP-Atlas, no GDPval, no Toolathlon, no BrowseComp. Tool calling is not even documented as a capability.

Reasoning / knowledge:

- **Nothing.** No GPQA Diamond, no HLE, no MMLU-Pro, no AIME, no CritPt, no AA-LCR, no instruction-following benchmark, no aggregate index, and **no hallucination measurement**.

Coding:

- **Vercel Next.js evaluation suite (31 tasks): 90.3% baseline, 96.8% with documentation context** — reported as tying **GPT-6 Astra**. This is the entire quantitative record for the model.
- **SWE-bench Verified / Pro, LiveCodeBench, Terminal-Bench, Aider Polyglot, SciCode, FrontierCode: no verified public score found.** There is no general-purpose coding measurement at all — only the Next.js/web-framework suite.

Multimodal:

- **Nothing**, consistent with a text-only model.

Long context:

- **No MRCR, RULER, LongBench or needle-retrieval number at any depth.** The 262,144-token window and 131,072-token output ceiling are gateway-declared and entirely unvalidated.

### Normalized scores (1–100)

- **Tool use: 42/100.** Scored on complete absence: **no agentic benchmark exists, and tool calling is not documented as a capability**. For a coding model this is unusual — most coding-tier models in this dataset at least publish function-calling support. A model that scores 96.8% on a 31-task Next.js suite is plainly being driven by *some* harness, but nothing public describes or measures its tool interface.
- **Reasoning: 45/100.** **Zero reasoning or knowledge benchmarks of any kind.** No GPQA, no HLE, no MMLU-Pro, no index, no hallucination rate. Scored below the midpoint because a model that genuinely ties GPT-6 Astra on a framework-specific suite must reason competently about code, with absolutely nothing public to calibrate general reasoning — and the 13-day age means no third party has had the chance.
- **Context window: 76/100.** 262,144 tokens with a **131,072-token output ceiling** is a strong specification, and the output ceiling in particular is high — four times what several competitors allow. Held well below where 256K alone would sit because the figures are **gateway-declared rather than vendor-specified**, nothing validates them, and the "linear context" characterisation that would explain them is third-party inference.
- **Multimodal: 15/100.** **Text-only** — no modality beyond text is reported by any source and no multimodal benchmark exists. Template floor.
- **Coding: 68/100.** The only measured dimension, and the result is genuinely impressive within its domain: **90.3% baseline rising to 96.8% with documentation context on Vercel's 31-task Next.js suite, tying GPT-6 Astra** — a frontier model at a vastly higher price. Two things cap it firmly. First, **domain narrowness**: this is a single web-framework suite run by the distributor, not SWE-bench, LiveCodeBench or Terminal-Bench, so it measures Next.js fluency rather than general software engineering. Second, **31 tasks** is a small sample, and the 6.5-point jump from documentation context suggests a meaningful dependence on in-prompt reference material.
- **Cost efficiency: 88/100.** **$0 for a 256K-context, 131K-output coding model that ties a frontier model on its target domain** is outstanding value, and the barrier to trying it is nil. Docked 12 points for three disclosed risks rather than price: the free window is **explicitly temporary**, there is **no zero-data-retention option**, and **prompts may be used for training** — which for proprietary Next.js source code is a real exclusion criterion, not a footnote. The unknown vendor compounds all three, since there is no entity to hold to a commitment.
- **Overall Score: 49.2/100.** Mean of the five non-cost dims (42 + 45 + 76 + 15 + 68) / 5 = 49.2. Best fit: a **free, zero-friction evaluation candidate for Next.js and web-framework work on non-proprietary code** — on its one published benchmark it genuinely matches a frontier model, and a 256K/131K window at $0 makes it trivially worth trying. The low Overall is a statement about the evidence, not a verdict on the model: **one distributor-run 31-task suite is the entire quantitative record**, four of five dimensions have nothing at all, the vendor is unknown, the context specification is gateway-declared, and prompts may be used for training. Revisit once any independent benchmark appears.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — independent write-ups of the Vercel AI Gateway listing ([Hugging Face community post](https://huggingface.co/blog/liliruli/what-is-pixel-canary-free-stealth-model), [Dev Signal](https://thedevsignal.com/guides/pixel-canary), [BeatAPI](https://beatapi.io/blog/what-is-pixel-canary-stealth-model), [margrop](https://blog.margrop.net/en/post/pixel-canary-stealth-coding-model-deep-dive/)), which between them establish the `stealth/pixel-canary` model string, the 2026-09-25 introduction date, the free-while-in-stealth pricing, the undisclosed developer, the 256K "linear" context characterisation, and the Vercel 31-task Next.js suite results of 90.3% baseline / 96.8% with documentation context tying GPT-6 Astra — plus BeatAPI's explicit framing that this is a preview without a published owner, lasting price or zero-data-retention option. This folder's `meta.json` supplied the gateway-declared 262,144 / 131,072 token limits, the text-only modality, and the no-ZDR / prompts-may-be-used-for-training terms, and those are labelled as curated and gateway-declared rather than vendor-specified. **BenchLM, Artificial Analysis and BenchmarkList were all checked and have no entry**, so the complete absence of agentic, reasoning, general-coding, multimodal and long-context measurement is reported as the central finding rather than proxied from any other model. No vendor identity is asserted and no benchmark was borrowed from GPT-6 Astra or any other model mentioned in the comparison. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
