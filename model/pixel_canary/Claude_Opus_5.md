# Pixel Canary — findings by Claude Opus 5

- Source: undisclosed vendor, distributed via Vercel AI Gateway as `stealth/pixel-canary`
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary
- **Short description:** An **anonymous, coding-specialised stealth model** distributed through Vercel's AI Gateway, free for a limited time. Its one substantive claim is narrow and strong: it **matches GPT-6 Astra on Vercel's Next.js evaluation, scoring 90.3% at baseline and 96.8% when given documentation context** ([Dev Signal](https://thedevsignal.com/guides/pixel-canary); [Vercel changelog, 2026-09-25](https://vercel.com/changelog/pixel-canary-is-now-available-in-stealth-for-free-on-ai-gateway)). One independent write-up is blunt about what it is not: "a preview to test, not a model with a published owner, lasting price, or zero-data-retention option" ([BeatAPI](https://beatapi.io/blog/what-is-pixel-canary-stealth-model)).
- **Provider / access:** **Vercel AI Gateway only**, as `stealth/pixel-canary`. Vercel ships a setup command that "detects installed agents, provisions or reuses an AI Gateway API key, and configures their connection to the gateway", after which the model is selected in the agent's model configuration; the gateway adds usage and cost tracking, per-key budgets and routing rules. **No OpenCode Zen ID.** This repo records `opencode/pixel_canary`.
- **Release / knowledge:** **2026-09-25** (Vercel changelog). Knowledge cutoff: no verified public date found — there is no technical report. **Thirteen days old at the time of this report.**
- **IDs:** `stealth/pixel-canary` (Vercel AI Gateway). **A genuine free ID**, and the only route.
- **Context window:** **262,144 tokens (256K)** with **131,072 maximum output** — gateway-declared rather than vendor-published. One write-up describes it as a "**256K linear context**" ([margrop](https://blog.margrop.net/en/post/pixel-canary-stealth-coding-model-deep-dive/)), which if accurate implies a linear-attention architecture, though no vendor confirms it.
- **Modalities:** **Text in → text out**, per the gateway's declared capabilities. No image, audio or video input; no generated media. Reasoning: no verified statement found. Tool calls: implied by the agent-integration setup flow, but unmeasured.
- **Pricing (as of 2026-10-08):** **$0 — free while in stealth.** Three disclosed non-monetary costs, and they are the worst combination in this dataset: it is explicitly **limited-time**, there is **no zero-data-retention option**, and **prompts may be used for training**. For a coding model that would be pointed at private repositories, that last point is decisive.
- **Architecture:** **Unknown.** No vendor, no parameter count, no training description, no licence, no technical report. The developer "has not been identified publicly."

### Raw benchmarks found

> **One benchmark exists, from the platform that distributes the model.** No aggregator covers it: BenchLM, Artificial Analysis and BenchmarkList all have no entry. Vercel's Next.js evaluation is a real, comparative, 31-task suite and the figures are specific — but it is a single narrow domain, measured by the distributor.

Agent / tool use:

- **Nothing.** No Terminal-Bench, no τ²/τ³-bench, no OSWorld, no MCP-Atlas, no GDPval, no SWE-bench-as-agent. Vercel's setup flow configures it into existing coding agents, so it is demonstrably usable as one; no measurement exists.

Reasoning / knowledge:

- **Nothing.** No GPQA Diamond, no HLE, no MMLU-Pro, no AIME, no CritPt, no AA-LCR, no aggregate index, and **no hallucination measurement**.

Coding:

- **Vercel Next.js evaluation (31 tasks): 90.3% baseline, 96.8% with documentation context** — reported as **tying GPT-6 Astra**, which is the top-scoring OpenAI model in this dataset (BenchLM 84.94). The **+6.5-point gain from supplying documentation** is itself a useful finding: it suggests a model that follows provided reference material closely rather than relying on memorised framework knowledge.
- **SWE-bench Verified / Pro, LiveCodeBench, Terminal-Bench, Aider Polyglot, SciCode, CursorBench: no verified public score found.** There is no general-purpose coding measurement at all.

Multimodal:

- **Nothing — text-only per the gateway's declared capabilities.**

Long context:

- **No MRCR, RULER, LongBench or needle-retrieval number at any depth.** The 256K window is gateway-declared and entirely unvalidated.

### Normalized scores (1–100)

- **Tool use: 45/100.** Vercel ships first-class integration into existing coding agents, and the model is clearly driven as one in practice — but **not one agentic benchmark exists**, and the Next.js evaluation measures code output rather than tool-loop behaviour. Scored below the midpoint on absence of evidence.
- **Reasoning: 45/100.** **Zero reasoning or knowledge benchmarks.** No GPQA, no HLE, no MMLU-Pro, no index, no hallucination rate. A model that reaches 96.8% on a framework-coding suite plainly reasons competently about code, but nothing public calibrates general reasoning and I will not infer it from a single domain-specific result.
- **Context window: 76/100.** 262,144 tokens with a **131,072-token output ceiling** is a strong specification, and the output limit in particular is generous. Held well below where 256K alone would sit because the figure is **gateway-declared rather than vendor-published**, nothing validates it at any depth, and the "linear context" characterisation comes from a third-party write-up rather than any vendor statement.
- **Multimodal: 15/100.** **Text-only** per the gateway's declared capabilities — no image, audio or video input, no generated media. Template floor. For a coding model this is a reasonable design choice, but it means no screenshot or design-mock input, which is a real limitation for front-end work specifically.
- **Coding: 70/100.** The only measured dimension, and the measurement is genuinely impressive within its scope: **90.3% baseline and 96.8% with documentation on Vercel's 31-task Next.js suite, tying GPT-6 Astra** — the strongest model in OpenAI's lineup by BenchLM aggregate. Two things cap it firmly. First, scope: this is **one framework in one language**, and there is no SWE-bench, LiveCodeBench or Terminal-Bench result to show the capability generalises. Second, provenance: the evaluation is run and published by **Vercel, which distributes the model** — not an adversarial or neutral party. A 96.8% on a 31-task suite is also a small sample at a ceiling, where two or three task outcomes move the headline several points.
- **Cost efficiency: 86/100.** **$0 on the only available route**, with Vercel's gateway supplying usage tracking, budgets and routing on top — genuinely frictionless for trying a frontier-adjacent coding model. Docked 14 points for the disclosed terms rather than the price, and these are the most restrictive free-tier conditions in this dataset: **no zero-data-retention option at all, prompts may be used for training, and the free period is explicitly limited**. For the private-repository work this model is built for, that combination rules out most professional use.
- **Overall Score: 50.2/100.** Mean of the five non-cost dims (45 + 45 + 76 + 15 + 70) / 5 = 50.2. Best fit: **free evaluation of Next.js and web-framework code generation on non-proprietary projects** — where a 96.8% documentation-grounded score genuinely competes with the best model in this dataset, and where the absence of data-retention guarantees does not matter. The Overall is low not because the model performed badly but because **one benchmark in one framework, published by its own distributor, is the entire public record**: no reasoning, no agentic, no general coding, no long-context measurement, no vendor, no architecture, and no licence. Treat the 90.3/96.8 figures as a promising signal about one narrow domain, not a capability profile.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — **Vercel's own changelog** for the 2026-09-25 introduction, the `stealth/pixel-canary` model string, the free-while-in-stealth terms and the AI Gateway agent-setup flow; independent write-ups from **Dev Signal** (the 90.3% baseline / 96.8%-with-documentation Next.js figures and the GPT-6 Astra tie), **BeatAPI** (the explicit statement that the developer is unidentified and that there is no published owner, lasting price or zero-data-retention option), **margrop** (the "256K linear context" characterisation, flagged as third-party rather than vendor-confirmed) and a **Hugging Face community post** corroborating the stealth distribution. BenchLM, Artificial Analysis and BenchmarkList were all checked and have **no entry**, so the complete absence of reasoning, agentic, general-coding, long-context and hallucination measurement is reported as the central finding rather than proxied. The repo's `meta.json` supplied the 262,144/131,072 gateway-declared token limits, the 31-task suite size, the text-only modality and the "prompts may be used for training" term, and is labelled as the source for each. The Next.js evaluation's provenance — run and published by the model's own distributor — is stated explicitly and reflected in the coding score, as is the small-sample caveat at a 96.8% ceiling. **No benchmark was imported from GPT-6 Astra or any other model**; the tie is reported as Vercel's comparative claim. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
