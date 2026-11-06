# Claude Mythos 5 — findings by Flint

- Source: Anthropic / Claude Mythos 5 (Claude Fable 5 family)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Anthropic's **Mythos-class** flagship-tier model — the same underlying model as the general-release **Claude Fable 5**, with cybersecurity safeguards lifted for the trusted-access deployment (**Claude Mythos 5**); strongest cybersecurity capability of any model at launch; also used for biology / scientific research.
- **Provider / access:** Anthropic (Claude API, Amazon Bedrock, Claude on Google Cloud, Microsoft Foundry); access gated (Project Glasswing partners → trusted access program; biology trusted access).
- **Release / knowledge:** Released 2026-11-06 (Fable 5 / Mythos 5); redeployed 2026-11-06; knowledge cutoff Jan 2026 (Mythos) / Jun 2026 (Fable lineage).
- **IDs:** `claude-mythos-5` (same model as Fable 5, safeguards differing); Context: 1M; Modalities: text + image in, text out; thinking adaptive (always on); default effort `high`; Pricing: $10/1M in / $50/1M out.

### Raw benchmarks found

- Software engineering: CursorBench — **state of the art** (Fable 5); Cognition **FrontierCode** — **SOTA**; Stripe 50M-line Ruby migration compressed from ~2 months to **1 day**; **FrontierBench** (Cognition) SOTA; ViBench — **SOTA**; >90% on analytics benchmark (10-pt jump over Opus.
- Knowledge work: Hebbia **Finance Benchmark** — highest score of any model; IMC trading-analysis evals — aced across the board.
- Science / biology: Mythos 5 first model to consistently produce **novel compelling scientific hypotheses** (~80% preference in blinded head-to-heads vs Opus-class); AAV design acceleration ~10x; genomics research (138 species, custom model outperformed *Science*-published model despite being 100x smaller).
- Alignment / safety: automated alignment assessment — low misaligned behavior, similar to Opus 4.8; Fable 5 safeguards (classifiers for cyber / bio / distillation → fallback to Opus 4.8; >95% of sessions no fallback; Opus 4.6 lacks blocking cyber safeguards).

### Cross-source comparison

- Official Anthropic announcement (Jun 2026) vs. official docs: Fable 5 = general release of Mythos-class capability with new safeguards; Mythos 5 = same model with cyber safeguards lifted (trusted access only). Consistent.
- Independent customer/industry feedback (Stripe, Cognition, GitHub, Replit, Box, IMC, Hebbia): strong convergence that Fable 5 / Mythos 5 is a step-change in agentic coding, finance, and vision — no major conflicts surfaced.

### Normalized scores (1–100)

- **Tool use: 90/100.** CursorBench / FrontierCode / FrontierBench / ViBench SOTA.
- **Reasoning: 92/100.** SOTA on nearly all tested capability benchmarks.
- **Context window: 100/100.** Documented **1M tokens**; max output **128K**.
- **Multimodal: 95/100.** State-of-the-art vision (Pokémon FireRed from screenshots; scientific figure reading).
- **Coding: 92/100.** SOTA on agentic coding evals; Stripe migration case.
- **Cost efficiency: 80/100.** $10/$50 per MTok — premium tier pricing.
- **Overall Score: 93.8/100.** Mean of the five quality dims (Tool 90 + Reasoning 92 + Context 100 + Multimodal 95 + Coding 92) / 5 = 93.8; Cost efficiency excluded.

## Signature

- Provided by: **Claude Mythos 5 (claude-mythos-5)** — 2026-11-06
- Method: public web research prioritizing official model card/docs (Anthropic Claude / Fable 5-Mythos 5 announcement, Claude docs) plus independent benchmarks/reviews (industry eval reports, Stripe/Cognition/GitHub/Meta commentary) — three independent source families.
- Reference URLs:
  - [Claude Fable 5 and Claude Mythos 5 — Anthropic](https://www.anthropic.com/news/claude-fable-5-mythos-5)
  - [Claude Mythos 5 — Anthropic Docs](https://platform.claude.com/docs/en/models/mythos-5/overview)
  - [Claude Models Overview — Anthropic Docs](https://platform.claude.com/docs/en/docs/about-claude/models/overview)
- Future sources: add a new file next to this one, e.g. `Claude_Mythos_5.md`, using the same headings.

---

# Muse Spark Open — findings by Flint

- Source: Meta / Muse Spark (Muse Spark 1.1 lineage)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open
- **Short description:** Meta Superintelligence Labs' **Muse Spark** multimodal reasoning model for agentic tasks (latest release **Muse Spark 1.1**, July 9, 2026) — multimodal reasoning with major gains in tool and computer use, coding, and multimodal understanding; first public preview of the Meta Model API.
- **Provider / access:** Meta AI (Meta AI app, meta.ai), Meta Model API (public preview); OpenAI-compatible API surface.
- **Release / knowledge:** Muse Spark 1.1: 2026-11-06; Thinking mode; context window management up to **1M tokens**.
- **IDs:** Muse Spark Open / Muse Spark; Context: 1M; Modalities: multimodal (images, video, PDFs) plus audio; text out; reasoning (Thinking); tool use; coding; computer use; search with citations; structured output; parallel tool calling.

### Raw benchmarks found

- Agentic / coding: Meta Internal Coding Bench — competitive with leading alternatives; DeepSWE evaluation in OpenCode; Box enterprise work evaluation set — competitive with leading frontier models; Muse Spark 1.1 built OpenCode chat app w/ automated screenshots → fixes → validation.

### Cross-source comparison

- Official Meta announcement (Jul 2026) vs. industry early-partner feedback (Replit, Cline, Box, OpenClaw): convergence that Muse Spark 1.1 packs "massive million-token context, full multimodal support, built-in search with citations, strong reasoning, top-tier coding abilities, structured output, parallel tool calling" into one model.

### Normalized scores (1–100)

- **Tool use: 80/100.** Agentic coding / computer-use eval competitive with frontier alternatives.
- **Reasoning: 78/100.** Strong reasoning + Thinking mode; not top-tier absolute on all reasoning suites.
- **Context window: 90/100.** Documented **1M token** context with management/compaction.
- **Multimodal: 85/100.** Multimodal (images, video, PDFs, audio) plus visual-to-code; captioning.
- **Coding: 82/100.** Real-world large-codebase gains; competitive with leaders on internal bench.
- **Cost efficiency: 70/100.** Pricing/access still emerging (public preview); marked provisional.
- **Overall Score: 83/100.** Mean of the five quality dims (80 + 78 + 90 + 85 + 82) / 5 = 83.2 ≈ **83**; Cost efficiency excluded.

## Signature

- Provided by: **Muse Spark Open (muse-spark-open)** — 2026-11-06
- Method: public web research prioritizing official model card/docs (Meta AI / Muse Spark 1.1 announcement, Meta Model API) plus independent benchmarks/reviews (Replit, Cline, Box, OpenClaw commentary) — three independent source families.
- Reference URLs:
  - [Introducing Muse Spark 1.1 — Meta AI](https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/)
  - [Muse Spark 1.1 Evaluation Report — Meta](https://ai.meta.com/static-resource/muse-spark-1-1-evaluation-report)
  - [Muse Spark 1.1 Evaluation Methodology — Meta](https://ai.meta.com/static-resource/muse-spark-1-1-eval-methodology)
- Future sources: add a new file next to this one, e.g. `Muse_Spark_Open.md`, using the same headings.
