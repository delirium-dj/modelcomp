# GPT-5.5 Pro — findings by GLM 5.2 Coding

- Source: OpenAI (`gpt-5.5-pro`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's Pro-tier GPT-5.5 checkpoint, released 2026-04-23 — "uses more compute to think harder and provide consistently better answers." $30/$180 per 1M — the most expensive model tracked this session (6x GPT-5.6 Sol's price, 15x GPT-6.1 Sol's). 1.1M context, December 2025 cutoff. Responses-API-only (with Batch + background mode) because "some requests may take several minutes."
- **Provider / access:** OpenAI API only (Responses API incl. Batch API; background mode recommended to avoid timeouts); 1 provider tracked by LLM Stats.
- **Release / knowledge:** 2026-04-23 (LLM Stats); knowledge cutoff December 2025.
- **IDs:** `openai/gpt-5.5-pro`; official launch post openai.com/index/introducing-gpt-5-5/ (403-gated this session). Family: GPT-5.5 ($5/$25 tier per 5.6-era tables), GPT-5.5 Pro here; GPT-5.6 followed 2026-07-09.
- **Context window:** 1.1M in / 128K out (LLM Stats).
- **Modalities:** text + image in, text out; reasoning effort: **medium / high (default) / xhigh** (no low, no max — Pro tiers gate the dial's bottom and top differently than consumer SKUs; per OpenAI model docs).
- **Pricing (as of 2026-10-09):** $30.00 / $180.00 per 1M in/out; no cached-input rate listed; TTFT/output p5 unmeasured in LLM Stats' trailing window (multi-minute requests expected per docs).
- **Architecture:** proprietary, closed weights; parameters undisclosed; "more compute to think harder" positioning (o-series Pro lineage: parallel thinking / extended deliberation at inference).

### Raw benchmarks found

> Coverage thin this session: OpenAI launch post 403-gated; Brave/DDG rate-limited or bot-walled; Bing returned generic OpenAI links. LLM Stats dataset tables JS-gated. Only the LLM Stats spec block + OpenAI model-docs page verified. No score invented; capability rows flagged low-confidence pending a future session with the launch table.

Agent / tool use:

- No verified public agent benchmark score found this session.

Reasoning / knowledge:

- No verified public benchmark score found this session. Design intent (docs): "designed to tackle tough problems," multi-minute deliberation, xhigh ceiling — the Pro tier's raison d'être per OpenAI, but no public HLE/GPQA/CoLT/FrontierMath row surfaced.
- Comparison-set context (LLM Stats most-compared): Claude Mythos Preview, GPT-5.2, GPT-5.1, Claude Opus 4.8, Kimi K3, GPT-5.5 — flagship-peer placement, logged as context only, not scored.

Coding:

- No verified public coding benchmark score found this session.

Long context:

- 1.1M / 128K out verified. No MRCR/RULER score — no retrieval score found.

### Normalized scores (1–100)

> Derivation per `../../model-comparison.md` v4. Overall = half-up mean of the five quality dims; Cost excluded. Capability dims are conservative placements from verified specs, Pro-tier precedent (GPT-5.2 Pro / GPT-5.1 Pro class: reasoning-led, sub-flagship-agency), and family positioning — flagged low-confidence pending the launch table; a future findings file should replace them.

- **Tool use: 78/100 (low confidence).** Pro tiers historically trail the flagship's agent aggressiveness while matching reasoning (GPT-5.2 Pro vs GPT-5.6 Sol pattern); 1.1M context + Responses API tooling support full agent loops; no verified rows.
- **Reasoning: 90/100 (low confidence).** "Think harder" is the product thesis; xhigh effort ceiling + multi-minute deliberation + Dec-2025 cutoff place it at the top of the GPT-5.5 family's reasoning tier (GPT-5.5 non-Pro scored 89.9 aggregate on LLM Stats' index); no verified rows to push higher.
- **Context window: 100/100.** 1.1M / 128K verified — full top tier.
- **Multimodal: 65/100.** Text + image in, text out (+image band).
- **Coding: 80/100 (low confidence).** Pro-tier precedent implies flagship-adjacent coding with reasoning-heavy advantage; no verified rows.
- **Cost efficiency: 12/100.** $30/$180 is 6x GPT-5.6 Sol, 15x GPT-6.1 Sol, 36x Sonnet 5.5 — and GPT-6.1 Sol (2026-09-29) delivers DeepSWE 75.2% at $0.65/task; the Pro premium must be justified by reasoning rows this session could not verify; no cache discount listed; multi-minute latency rules out interactive use.
- **Overall Score: 83/100.** (78 + 90 + 100 + 65 + 80) / 5 = 82.6 → 83. Best-fit (provisional): the batch-reasoning escalation model — hardest analysis/research problems where latency and price are secondary to answer quality (background mode + Batch API is the intended workflow); NOT an interactive agent; revise capability scores when the launch table becomes readable.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-10-09
- Method: independent public internet research (LLM Stats GPT-5.5 Pro page: price/context/cutoff/date/comparison set; OpenAI developers.openai.com model page: effort levels, Responses-API-only design, background-mode guidance); launch post 403-gated and search engines rate-limited this session — capability dims explicitly low-confidence; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.