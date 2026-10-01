Provided by: **Qwen 3.8 27B (cerebras/qwen-3.8-27b)** — 2026-09-24

# Gemini 3.1 Pro — findings by Qwen 3.8 27B

- Source: Google/Gemini 3.1 Pro
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro (listed as "Gemini 3.1 Pro Preview" on third-party trackers)
- Updated: **2026-10-01 (UTC)** — re-research pass; pricing correction + availability note appended below; scores unchanged
- **Short description:** Google's next flagship in the Gemini 3 series — a natively multimodal, reasoning-first model; its strongest positioning is complex agentic, coding, and long-context work.
- **Provider / access:** Google first-party (Gemini API, Vertex AI, Google AI Studio, Google Antigravity — Gemini API, not raw Chat Completions) plus DeepInfra as a third-party provider (2 providers tracked by llm-stats). Not listed on OpenCode Zen; **no Free ID exists on Zen** — this is a paid API model.
- **Release / knowledge:** released 2026-02-19 (model card published 19 February 2026); knowledge cutoff January 2025 (llm-stats).
- **IDs:** `gemini-3.1-pro` (Google first-party, per Google Cloud docs listing); third-party provider IDs not individually verified. No Free ID on Zen.
- **Context window:** 1M tokens total (model card: "token context window of up to 1M"; DeepInfra row 1.0M/1.0M, Google row 1.0M/65.5K on llm-stats). Max output 64K (model card; ≈65.5K per Google's llm-stats row).
- **Modalities:** text, image, audio (speech), video in; text out. Reasoning: yes (Thinking mode; default dynamic thinking per launch coverage). Tool calls: yes (τ²-bench, MCP-Atlas, Terminal-Bench, BrowseComp agentic results). JSON mode: not verified.
- **Pricing (as of 2026-09-24):** Google first-party $2.50 in / $15.00 out per 1M (llm-stats); Artificial Analysis reports $2.00 / $12.00 "based on Google's API" with a 90% cache discount (cache hit ≈ $0.20/M); DeepInfra $2.00 / $12.00 per 1M (llm-stats). Blended 7:2:1 (cache hit : input : output) = $1.74/M and $0.67 per Artificial Analysis Intelligence Index task. Paid only — no free tier; sources disagree on the first-party rate (both listed).
- **Architecture:** proprietary (based on Gemini 3 Pro). Parameter count not disclosed by Google.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **68.5%** (Google model card, Terminus-2 harness; top of the vendor comparison table vs Opus 4.6 65.4%, Sonnet 4.6 59.1%, GPT-5.2 54.0%, GPT-5.3-Codex 64.7%[^1])
- Tau2-Bench: **Retail 90.8% / Telecom 99.3%** (Google model card; τ²-bench, not τ³)[^1]
- GDPval-AA: **Elo 1317** (Google model card; vs Sonnet 4.6 1633, Opus 4.6 1606, GPT-5.2 1462, Gemini 3 Pro 1195)[^1]
- MCP-Atlas: **69.2%** (Google model card; highest in its comparison table; Gemini 3 Pro 54.1%)[^1]
- BrowseComp: **85.9%** (Google model card, Search + Python + Browse; highest in table vs Opus 4.6 84.0%)[^1]
- APEX-Agents (long-horizon professional tasks): **33.5%** (Google model card; top of table vs Opus 4.6 29.8%, GPT-5.2 23.0%)[^1]
- Tau3-Banking: **no verified public score found** (no τ³ row on the model card)
- Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (no tools; Google model card; highest in its comparison table)[^1]
- HLE: **44.4%** (full set, text + multimodal, no tools) / **51.4%** (Search blocklist + Code; Google model card; Opus 4.6 40.0% / 53.1%)[^1]
- ARC-AGI-2: **77.1%** (ARC Prize Verified; Google model card — 2.4× predecessor Gemini 3 Pro 31.1%; well ahead of Opus 4.6 68.8%, GPT-5.2 52.9%)[^1]
- MRCR v2 (8-needle): **84.9% average at 128K; 26.3% pointwise at 1M** (Google model card; 1M figure matches Gemini 3 Pro 26.3%, other models "not supported")[^1]
- LCR: **no verified public score found** (not on model card; AA chart not text-exposed)[^2]
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **30 / #81 of 210** (AA v4.3.2, 10 evaluations)[^2]
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** (chart-only on AA page)[^2]

Coding:

- SWE-bench Verified: **80.6%** (single attempt; Google model card; vs Opus 4.6 80.8%, GPT-5.2 80.0%, Sonnet 4.6 79.6%)[^1]
- SWE-bench Pro (Public): **54.2%** (single attempt; Google model card; best non-Codex in table vs GPT-5.2 55.6%, GPT-5.3-Codex 56.8%)[^1]
- LiveCodeBench Pro: **Elo 2887** (Google model card; vs Gemini 3 Pro Elo 2439, GPT-5.2 Elo 2393)[^1]
- SciCode: **59%** (Google model card; highest in its comparison table; Gemini 3 Pro 56%)[^1]
- Terminal-Bench 2.0: **68.5%** (as above; agentic terminal coding)[^1]
- DeepSWE / Coding Index: **no verified public score found**
- SWE-Atlas / Vibe Code Bench: **no verified public score found**

Long context:

- MRCR v2 (8-needle): **84.9% average at 128K; 26.3% pointwise at 1M** (Google model card; no RULER/GraphWalks reported)[^1]

Speed / cost extras:

- Output speed **120.2 tok/s** (AA, Google API; class median 72.3 t/s)[^2]
- TTFT (incl. thinking) **27.54s** (AA)[^2]; Google p95 TTFT 0.60s, p95 throughput 90.0 char/s over trailing 7 days (llm-stats)[^3]
- **67M** AA Intelligence Index output tokens vs 88M median (concise)^ [^2]

### Normalized scores (1–100)

- **Tool use: 87/100.** τ²-bench 90.8%/99.3% is far above the frontier ref (~50%+), MCP-Atlas 69.2%, BrowseComp 85.9%, and APEX-Agents 33.5% all top their vendor comparison tables; capped below frontier by Terminal-Bench 2.0 68.5% (frontier ref ~85%+) and GDPval-AA Elo 1317 (between the mid 900–1200 and frontier ~1750 bands).
- **Reasoning: 85/100.** GPQA 94.3% (table-best), HLE 44.4% no-tools / 51.4% with tools (≥40% frontier ref met), and ARC-AGI-2 77.1% (ARC Prize Verified, ~2.4× predecessor) put it in the 90–100 band; capped by MRCR v2 pointwise-at-1M 26.3% (well under the 95%+ frontier ref) and AA Intelligence Index 30 (#81/210).
- **Context window: 95/100.** Verified 1M window (model card + DeepInfra 1.0M) sits in the ≥1M = 95–100 tier; held at the tier floor because MRCR v2 pointwise at 1M is 26.3%, far below the ≥98% retrieval gate for 100 (128K average 84.9% is solid mid-context).
- **Multimodal: 91/100.** Native text + image + audio (speech) + video in, text out → audio-in 90–100 band; MMMU-Pro 80.5% and MMMLU 92.6% (table-best multilingual) support it; text-only output and MMMU-Pro 80.5% (essentially flat vs Gemini 3 Pro's 81.0%) keep it near the band floor.
- **Coding: 87/100.** SWE-bench Verified 80.6% (near Opus 4.6's 80.8% best-in-table), SWE-bench Pro 54.2% (best non-Codex), LiveCodeBench Pro Elo 2887, SciCode 59% (≥55% frontier ref), and TB 2.0 68.5% (table-best) — a front-tier agentic coder; capped by the absence of any verified DeepSWE/Coding Index number and TB 2.0 below the ~85% frontier ref.
- **Cost efficiency: 74/100.** Paid only (no Free ID on Zen): $2.50/$15.00 first-party per llm-stats sits just under the ~$3/$15 ≈ 60 anchor, while DeepInfra $2.00/$12.00 and the 90% cache discount ($0.20/M cache hits, $1.74/M blended 7:2:1, $0.67/AA task) push the lower verified price point toward the ~80s; 74 splits the two verified price points.
- **Overall Score: 89.0/100.** (87 + 85 + 95 + 91 + 87) / 5 = 89.0 — best-fit: the premium multimodal agentic flagship — pick it for heavy video/audio ingestion, long-horizon tool use, and coding where a $2–2.50/$12–15 rate is acceptable, and avoid 1M-needle retrieval workloads.

---

## Signature

- Provided by: **Qwen 3.8 27B (cerebras/qwen-3.8-27b)** — 2026-09-24
- Method: public internet research (Google DeepMind model card, Artificial Analysis model page, llm-stats model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

[^1]: Google DeepMind, "Gemini 3.1 Pro — Model Card" (published 19 February 2026) — https://deepmind.google/models/model-cards/gemini-3-1-pro/
[^2]: Artificial Analysis, "Gemini 3.1 Pro Preview — Intelligence, Performance & Price Analysis" (Intelligence Index v4.3.2) — https://artificialanalysis.ai/models/gemini-3-1-pro-preview
[^3]: llm-stats, "Gemini 3.1 Pro: Benchmarks, Pricing & Context Window" (provider pricing/latency, knowledge cutoff) — https://llm-stats.com/models/gemini-3.1-pro-preview

## Additional findings (2026-10-01, re-research pass)

Re-researched 8 days after the initial report; sources: OrcaRouter explainer (23 Sep 2026, figures read directly from Google's Gemini API docs and rate card that day), Artificial Analysis v4.3.2 as live on 23 Sep 2026. No capability-dimension changes; scores stand.

- **Status — still preview, 7 months on.** Endpoint is still `gemini-3.1-pro-preview` (plus a `gemini-3.1-pro-preview-customtools` variant); model page carries "Last update: February 2026". No GA, no shutdown date, no successor shipped. It remains the only Pro-tier model in the Gemini 3 family: the Gemini 3 Pro predecessor is listed as shut down, and Gemini 2.5 Pro is restricted to prior users.
- **Pricing correction (Google rate card, read 2026-09-23):** first-party standard tier is **$2.00 / $12.00 per 1M for prompts ≤200K**, doubling to **$4.00 / $18.00 for prompts >200K** — a cliff that hits exactly the long-context workloads the 1M window was bought for. Cache reads $0.20/$0.40 per 1M (per tier) plus cache storage $4.50 per 1M tokens/hour; batch/flex $1.00/$6.00 (≤200K) and $2.00/$9.00 (>200K); priority $3.60/$21.60. This confirms the Artificial-Analysis-cited $2.00/$12.00 was the correct first-party rate; the $2.50/$15.00 in the initial report was a tier-mixed third-party tracker artifact (single rates without a prompt-size band are flagged as unusable for estimates).
- **Availability question (open):** since 2026-09-18, AI Studio developer-forum users report Gemini 3.1 Pro missing from the AI Studio model selector, with paid users moved to Gemini 3.8 → 3.7 → 3.6 Flash. No vendor reply, no deprecation notice found; still listed and callable through the Gemini API as of 2026-09-23. Treated as an unresolved user-report, not a retirement.
- **Successor:** still nothing. Reporting (SemiAnalysis: effort quietly cancelled; WSJ via secondary outlets: internal candidate dropped for failing to beat the Flash series; Google's line: restricted partner testing, no confirmed month). No Google confirmation or denial found.
- **Independent index (AA v4.3.2, live 2026-09-23):** Intelligence Index **30, #81 of 212** (class grew 210→212; my #81 rank holds). Speed 116.5 tok/s (#38; initial report had 120.2 from an earlier AA revision), cost **$0.67 per index task** (#31, matches initial report), verbosity **67M output tokens** (#39, matches). Class leader: Claude Opus 5 at max reasoning, 58. Note: secondary launch coverage disagrees with itself on some February numbers (e.g. GPQA Diamond quoted as both 94.1 and 94.3); the Google model card value (94.3) used in the initial report remains the cited authority.
- **Family context:** Gemini 3.8 Flash (GA 2026-09-02; introductory $0.75/$3.75 through 2026-12-31; free tier) now outscores 3.1 Pro on the independent index (41 vs 30) and is the newer of the two.
- **Specs re-confirmed:** 1,048,576 input / 65,536 output; text + image + video + audio + PDF in, text out; thinking tokens billed at output rate; caching, code execution, function calling, Search/Maps grounding, structured outputs, URL context, batch/flex/priority all supported. No knowledge-cutoff date stated on Google's own model page (the January 2025 figure remains a third-party listing, unconfirmed).
- **Cost efficiency note:** with the corrected rate card, the initial report's Cost 74 stands: $2.00/$12.00 (≤200K) interpolates to ~70–75 on the pricing anchors, and the 2× cliff above 200K offsets that. No dimension changed in this pass.