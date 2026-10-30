# Claude 3.5 Haiku — findings by Qwen 3.8 Max

- Source: Anthropic (`claude-haiku-3.5`; id `anthropic/claude-3-5-haiku-20241022`; AA `claude-3-5-haiku`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** Claude 3.5 Haiku is Anthropic's small, fast, cheap October-2024 model — the cheapest 200K-context Claude of its era, positioned as matching Claude 3 Opus at Haiku speed and price. It is **non-reasoning** (AA: "direct responses without extended chain-of-thought"), launched **text-only** with image (and PDF) input added later, and carries a hard **8,192-token output cap**. Its benchmarks are modest even for launch day — SWE-bench Verified 40.6%, GPQA Diamond 41.6%, τ-bench Retail 51.0% — and it was **retired on 2026-02-19**, so Artificial Analysis now shows it fully delisted (Intelligence / Speed / Cost / Verbosity all N/A) and points to Claude Haiku 4.5 (SWE-bench Verified 73.3%) instead. A reattribution guard matters here: meta's "74% internal agentic-coding score" is almost certainly Haiku 4.5's 73.3% SWE-bench Verified bleeding into this card — Haiku 3.5's real coding number is 40.6%, and the 74% is NOT credited. Scored Overall 65 (div −1.2 vs curated 66.2).

## Model card

- **Name:** Claude 3.5 Haiku
- **Short description:** Anthropic's smallest, fastest, cheapest member of the Claude 3.5 family (Oct 2024) — a non-reasoning model that matched Claude 3 Opus performance at Haiku speed/price, aimed at high-volume, latency-sensitive tasks (classification, extraction, chat, sub-agents). Text-only at launch; image/PDF input added later.
- **Provider / access:** Proprietary (closed weights). Served via the Anthropic API, Amazon Bedrock, and Google Vertex AI during its life; id `anthropic/claude-3-5-haiku-20241022`. No free ID. **RETIRED 2026-02-19** — AA's provider availability is now "check the providers page."
- **Release / knowledge:** Released **October 22, 2024**. Pricing **revised December 3, 2024** to $0.80/$4.00. **Retired February 19, 2026**; superseded by Claude Haiku 4.5 (Oct 2025). **Knowledge cutoff July 1, 2024.**
- **IDs:** id `anthropic/claude-3-5-haiku-20241022`; AA `claude-3-5-haiku`.
- **Context window:** **200,000 total; 8,192 max output** — the small output cap is a hard limit for long-generation tasks.
- **Modalities:** **Text + image (+ PDF) in → text out.** Multimodal (AA confirms it analyzes/describes/answers questions about images), but it was **text-only at launch** with image input arriving later. **Reasoning: No** (non-reasoning; a reasoning variant is not offered).
- **Pricing:** Final published rate **$0.80 / 1M input, $4.00 / 1M output** ($0.08 / 1M cached read; batch $0.40 / $2.00). ~3.75× cheaper than Sonnet 4.5 on both input and output at the time; now retired (not purchasable at scale).
- **Architecture:** Proprietary; parameter count undisclosed by Anthropic. A non-reasoning transformer (no extended-thinking / chain-of-thought mode), the smallest tier of the Claude 3.5 family.

### Raw benchmarks found

> **Provenance:** Anthropic-vendor launch numbers, corroborated by third-party trackers. AA's Intelligence Index / Speed / Cost are **all N/A** (the model is retired/delisted; AA continues no benchmarking for it). The two independently corroborated figures are SWE-bench Verified 40.6% (aireleasetracker + the community SWE-bench leaderboard) and GPQA Diamond 41.6% (aireleasetracker). τ-bench Retail 51.0% is Anthropic-vendor. Meta's "74%" is an unverified/likely-misattributed standout — see Meta-verification.

- **Agent / tool use:** **τ-bench Retail 51.0%** (vendor) — mid. Supports tool/function use and was positioned for fast sub-agent work, but it is non-reasoning and retired; computer use was a Claude 3.5 **Sonnet** feature, NOT Haiku. No Terminal-Bench / GDPval result.
- **Reasoning / knowledge:** **NOT a reasoning model** (no extended thinking). **GPQA Diamond 41.6%** (low). Knowledge cutoff July 2024 (old). It "matches Claude 3 Opus" per Anthropic's era positioning, but on 2026 standards the reasoning/knowledge profile is weak.
- **Coding:** **SWE-bench Verified 40.6%** (independently corroborated: aireleasetracker + the SWE-bench leaderboard "Claude 3.5 Haiku · Tools · 40.60"). Mid-low; respectable for a Haiku-tier model at its Oct-2024 launch, low by 2026 standards. Non-reasoning.
- **Multimodal:** Text + image (+ PDF) input → text out; AA confirms image analysis/description/QA. **Text-only at launch**, image added later. No model-specific MMMU/vision benchmark was isolated in this research.
- **Long context:** 200K window, but the **8,192-token max output** is a hard cap; no RULER / MRCR long-context benchmark isolated.
- **Speed / cost:** AA shows Speed and Cost as **N/A** (retired — no longer measured). Historically it was the fast, cheap tier ("Haiku speed"); final rate $0.80/$4.00 ($0.08 cached; batch $0.40/$2.00).

> **Meta-verification:** meta.json independently checked, not inherited. CONFIRMED: id `anthropic/claude-3-5-haiku-20241022`; released Oct 22 2024; 200K / 8,192-out; text+image(+PDF) in → text out, **text-only at launch** (Anthropic + release coverage confirm image arrived later); **$0.80/$4.00** final rate (Anthropic revised pricing Dec 3 2024), $0.08 cached, batch $0.40/$2.00; **retired 2026-02-19**; SWE-bench Verified 40.6% and GPQA Diamond 41.6% (both independently corroborated); τ-bench Retail 51.0% (vendor); superseded by Haiku 4.5 (SWE-bench Verified 73.3%). **NON-REASONING** (AA confirms). FLAGGED / CORRECTED: (1) **REATTRIBUTION GUARD —** meta's standout "74% internal agentic-coding score" is NOT substantiated for Haiku 3.5 and is almost certainly a conflation with **Haiku 4.5's 73.3% SWE-bench Verified** (which meta's own tradeoff line cites). Haiku 3.5's actual coding figure is **40.6%**; the 74% is **NOT credited**. (2) AA Intelligence/Speed/Cost all N/A because the model is retired — scores lean on the vendor launch numbers + trackers, not live AA measurement. (3) The 8,192-token output cap is a real constraint distinct from the 200K input window. (4) Knowledge cutoff July 2024 is old. Kept DISTINCT from **claude-haiku-4.5** and **claude-haiku-5.5** (later, stronger Haikus), **claude-sonnet-3.5** (the larger 3.5 sibling that got computer use), and **claude-3-opus** (the model it "matched") — none of their numbers are credited here.

### Normalized scores (1–100)

- **Tool use: 64/100.** τ-bench Retail 51.0% (vendor) is mid and it supports tool/function use for fast sub-agent work, but it is non-reasoning, retired, and computer use was a Sonnet (not Haiku) feature — no Terminal-Bench/GDPval evidence.
- **Reasoning: 56/100.** Explicitly NOT a reasoning model (no extended thinking), GPQA Diamond 41.6% is low, and the July-2024 knowledge cutoff is old; it "matched Claude 3 Opus" for its era but the reasoning/knowledge profile is weak on 2026 standards.
- **Context window: 72/100.** A 200,000-token input window (solid, RAG-friendly) held back by the hard **8,192-token max output** cap — well below the 64K–128K outputs of comparable models — and no long-context retrieval benchmark.
- **Multimodal: 74/100.** Text + image (+ PDF) input → text out, confirmed by AA — but it launched text-only (vision added later), vision is secondary for a small retired model, and no model-specific vision benchmark was isolated (documented image/PDF input, unbenchmarked).
- **Coding: 60/100.** SWE-bench Verified 40.6% (independently corroborated) was respectable for a Haiku-tier model at its Oct-2024 launch but is mid-low by 2026 standards, and it is non-reasoning; the meta "74%" is not credited (see guard).
- **Cost efficiency: 64/100.** It was the cheapest 200K-context Claude of its era (~3.75× cheaper than Sonnet 4.5, $0.08 cached reads, batch $0.40/$2.00) — but it is now retired (unavailable at scale) and its $4.00/M output is uncompetitive against 2026 budget models (e.g. GPT-5 nano at $0.40/M out). (Scored but NOT counted toward Overall.)
- **Overall Score: 65/100.** Half-up mean of the five quality dims (64+56+72+74+60)/5 = 65.2 → 65. Divergence **−1.2** vs the curated queue value 66.2 — my read sits slightly below the curated value, reflecting the non-reasoning architecture, the low GPQA (41.6%) and SWE-bench Verified (40.6%), the hard 8,192-token output cap, and retired/delisted status, against the curated credit for its era-defining cost-efficiency and multimodal input. Cost efficiency excluded from the mean per methodology.

---

## Signature

- **Provided by:** Qwen 3.8 Max (`qwen/qwen-3.8-max`)
- **Method:** Fresh independent public web research on 2026-10-30 — the Artificial Analysis Claude 3.5 Haiku page (retired/deprecated status, Intelligence/Speed/Cost/Verbosity all N/A, 200k ctx, text+image in, non-reasoning, knowledge cutoff July 2024, proprietary), Anthropic's *Computer use, Claude 3.5 Sonnet, and Claude 3.5 Haiku* news post (Oct 22 2024 launch; the Dec 3 2024 pricing revision to $0.80/$4.00), aireleasetracker (GPQA Diamond 41.6%, SWE-bench Verified 40.6%), the community SWE-bench leaderboard (Claude 3.5 Haiku · Tools · 40.60), and release/retirement coverage (text-only at launch, image added later; superseded by Haiku 4.5); ≥3 independent searches/fetches. meta.json verified against primary sources, not inherited — the "74% agentic-coding" standout was identified as a likely misattribution of Haiku 4.5's 73.3% and excluded. No peer findings files read (zero-influence rule).
- **Future sources:** n/a — the model is retired (2026-02-19); any live AA measurement is discontinued. Historical interest only: an isolated vision benchmark (MMMU), a long-context (RULER/MRCR) result, and confirmation of the retired endpoint's final provider availability.
