# GPT-5.2 Pro — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.2-pro`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro (hyphenated vendor style)
- **Short description:** The most powerful tier of OpenAI's GPT-5.2 series ("higher accuracy on difficult questions" — WIRED): a slow, accuracy-first reasoning model that pairs elite math/science results (AIME 100% without tools, GPQA 93.2%, ARC-AGI-2 54.2%) with premium pricing. Sits above GPT-5.2 Instant/Thinking; not the coding-agent variant (that is GPT-5.2-Codex).
- **Provider / access:** OpenAI API (`gpt-5.2-pro`) and ChatGPT Pro tier; price-per-token lists 3 API providers, Azure cheapest. Responses API per OpenAI convention.
- **Release / knowledge:** 2025-12-10 (pricepertoken model record; the GPT-5.2 series launched during the Gemini 3 "Code Red" window per WIRED, with GPT-5.2-Codex following 2025-12-18); knowledge cutoff not verified in sources found.
- **IDs:** `openai/gpt-5.2-pro` — no Free ID exists on Zen
- **Context window:** 400K tokens (pricepertoken + BenchLM family catalog record); max output not verified for the Pro tier specifically.
- **Modalities:** text + image input (vision listed by provider aggregates), text output; reasoning-first tier with tool use; JSON mode: not verified.
- **Pricing (as of 2026-10-30):** provider-listed **$10.50–$21.00/Mtok input, $84.00/Mtok output** (pricepertoken, updated 2026-10-27; Azure cheapest at $10.50). OpenAI first-party list price not verified in sources found. Premium tier by design.
- **Architecture:** proprietary, closed weights; parameters undisclosed. Part of the GPT-5.2 family (Instant / Thinking / Pro / Codex variants).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / OSWorld: no verified public score found for the Pro tier
- Tool use evidence is indirect: vision + tools capability and "most powerful tier" positioning (WIRED); OpenAI documented GPT-5.2-class agentic coding via the Codex variant, not Pro

Reasoning / knowledge:

- GPQA Diamond: **93.2%** (rdworldonline/OpenAI eval table — "essentially tied with Gemini 3 Deep Think's 93.8%"); a provider aggregate lane lists 90.3% (pricepertoken — different run, both cited)
- AIME 2025 (no tools): **100%** (rdworldonline; matches Gemini 3 Pro only with code execution enabled)
- ARC-AGI-2: **54.2%** (rdworldonline; vs Thinking 52.9%, Opus 4.5 37.6%, Gemini 3 Pro 31.1%)
- HLE: **36.6%** (rdworldonline; Thinking 34.5%, Gemini 3 Deep Think 41.0% — a relative weak row)
- MMLU-Pro: **87.4%** (pricepertoken aggregate)
- Artificial Analysis Intelligence Index: no row found for this exact ID (pricepertoken's own "Intelligence 30.4, 89th percentile" aggregate is its proprietary scale, cited as such)

Coding:

- SWE-bench Verified: not reported for Pro (GPT-5.2 Thinking: **80.0%** — family lineage, labeled; BenchLM family record)
- SWE-bench Pro (GPT-5.2 family): 55.6% (BenchLM, attributed to the GPT-5.2 announcement via GPT-5.4 docs — family-level, labeled)
- LiveCodeBench / SciCode / DeepSWE: no verified public score found for the Pro tier
- pricepertoken's proprietary "Coding 88.9" aggregate (scale undefined — cited, not normalized from)

Long context:

- 400K window; no MRCR/RULER retrieval figure published — no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 64/100.** No agent-harness rows (TB/Tau3/GDPval/OSWorld) published for the Pro tier; scored from vision+tools capability and tier positioning, capped hard by missing measured agent evidence.
- **Reasoning: 86/100.** GPQA 93.2% and AIME 100% (no tools) are elite-band, ARC-AGI-2 54.2% leads its comparison table; capped by HLE 36.6% and the absence of an independent AA Index row.
- **Context window: 75/100.** Verified 400K tokens (upper-middle of the 200K–500K tier); no retrieval data published.
- **Multimodal: 65/100.** Text + image input, text output; no audio/video/PDF input documented.
- **Coding: 75/100.** No Pro-specific SWE-bench rows; family evidence (Thinking 80.0% Verified, 55.6% Pro) is lineage data, and pricepertoken's 88.9 "Coding" aggregate uses an undefined scale — scored conservatively between them.
- **Cost efficiency: 22/100.** $10.50–$21 in / $84 out is past the $10/$50 ≈ 30 reference band — the most expensive per-output-token model measured in this cycle's set; an accuracy-tier luxury price.
- **Overall Score: 73/100.** Mean of the five quality dims (64+86+75+65+75)/5 = 73.0. Best fit: maximum-accuracy math/science reasoning where cost is secondary; poor fit for agentic coding (use the Codex variant) and for any cost-sensitive workload.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-30
- Method: public internet research — WIRED launch coverage, OpenAI GPT-5.2 announcement, rdworldonline benchmark table, pricepertoken provider/pricing record (updated 2026-10-27), BenchLM family catalog; Pro-tier gaps (agent harnesses, SWE rows, AA Index) recorded as "no verified public score found" and family rows labeled as lineage. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
