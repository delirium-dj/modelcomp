# Glyph Cluster — findings by Qwen 3.8 Flash

- Source: Stealth (`stealth/glyph-cluster`), free preview during an undisclosed stealth period
- Date: 2026-11-13 (UTC) — deep research pass (2 independent web searches + 1 primary-source fetch: the NiteAgent Arena leaderboard; identity/throughput claims surfaced via additional search snippets, labelled below)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **PROVISIONAL / LOW CONFIDENCE (stealth).** Vendor-undisclosed weights. Community tokenizer-forensics *attributes* this endpoint to Microsoft MAI, but the vendor has **not confirmed** any identity, so **no MAI-Thinking-1 figures are imported as a lineage proxy** (identity is a hypothesis, not a measured ID). Overall is anchored on the **only exact-ID measured row available** (the NiteAgent Arena judgment leaderboard) plus the confirmed 256K spec, not on standard capability benchmarks — those are absent for the stealth ID. Re-verify; stealth routes can be swapped or retired without notice.

## Model card

- **Name:** Glyph Cluster (stealth anonymous reasoning endpoint; listed under the `stealth/` publisher namespace).
- **Short description:** An unattributed test-time-reasoning model surfaced for **free** on Vercel AI Gateway and OpenRouter during its stealth period, aimed at long-form/agentic text and software-engineering-flavoured workflows. Likely a Microsoft MAI preview per community forensics, but **vendor identity unconfirmed**.
- **Provider / access:** Vercel AI Gateway (`https://ai-gateway.vercel.sh/v1/chat/completions`) and OpenRouter, model id `stealth/glyph-cluster` (arena also shows `stealth/glyph-cluster:free` / `:freestealth`, served via commandcode). Chat Completions API. Free preview tier — no committed SLA.
- **Release / knowledge:** undisclosed (stealth); promo-window listing surfaced ~2026-11. No vendor knowledge-cutoff disclosure.
- **IDs:** `stealth/glyph-cluster` (and `:free` / `:freestealth` tier suffixes — same weights, not separate models).
- **Context window:** **256,000 total / 256,000 max output** (per folder `meta.json`; vendor-confirmed value pending — stealth).
- **Modalities:** **text in / text out**; test-time reasoning on; tool calls present on arena lanes. No image/audio/video input evidenced. Reasoning yes; JSON/tool mode unverified for the exact ID.
- **Pricing (as of 2026-11-13):** **$0 / $0 / $0** free preview tier on Vercel AI Gateway & OpenRouter during stealth. ⚠️ Data-usage/privacy caveats apply to free stealth routes; promo may end without notice.
- **Architecture:** proprietary, closed, undisclosed params. Community tokenizer-forensics (r/opencode, r/vercel) points at Microsoft MAI; **unconfirmed** — treated as identity hypothesis only, never as a scoring proxy.

### Raw benchmarks found

Only **exact-ID measured rows** are scored. Everything below "no verified public score found" is genuinely absent for the stealth `stealth/glyph-cluster` id (AA/LMArena/SWE-bench do not index it).

Agent / tool use:

- NiteAgent Arena (judgment leaderboard, `niteagent arena v1.1.5`, 30-day window, blog/agentic-writing lane, small n): record **2W–6L (25% win%)**, **avg 7.91/10**, **best 8.8**, one outright match win (7.8) — competitive with recognized mid-tier reasoning models deepseek-v4.1-flash, glm-5.3-flash, mimo-v2.6-flash. *(harness = LLM-judged long-form output, not a capability eval; treat as a soft signal.)*
- Terminal-Bench / Tau3-Banking / Tau2-Bench / GDPval-AA / MCP-Atlas: **no verified public score found** (meta notes "timeout sensitivity on pass@1" on complex autonomous agent benchmarks — qualitative only).

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt: **no verified public score found** for the exact ID.
- Artificial Analysis Intelligence Index / BenchLM overall: **not indexed** (stealth id).

Coding:

- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE: **no verified public score found** for the exact ID. Meta claims it was "tested on multi-step software engineering workflows"; no public per-benchmark row located.

Long context:

- No MRCR / RULER / GraphWalks retrieval row found; the **256K window** itself is the only verified long-context fact (meta).

### Normalized scores (1–100)

- **Tool use: 52/100.** Only exact-ID agentic evidence is the NiteAgent judgment arena (participates, competitive but not dominant, small sample), and the meta flags pass@1 timeout sensitivity on complex autonomous agent tests. No Terminal-Bench/Tau/GDPval rows — held mid-range and provisional.
- **Reasoning: 72/100.** Test-time-reasoning model that places competitively with ~73–80-Overall reasoning peers (deepseek-v4.1-flash, glm-5.3-flash) on the arena, including a match win and a best-8.8 output. Capped and low-confidence because no absolute reasoning benchmark (GPQA/HLE/AA-Index) exists for the stealth ID.
- **Context window: 76/100.** 256K total / 256K output is the 200K–500K band (65–84); no dedicated retrieval row, so it sits mid-band on window size alone.
- **Multimodal: 15/100.** Text-in / text-out only (no image/audio/video evidenced) — the text-only floor per methodology.
- **Coding: 62/100.** SWE-flavoured arena tasks completed at competitive scores and meta cites multi-step software-engineering testing, but no public per-benchmark coding row exists for the exact ID — provisional upper-mid.
- **Cost efficiency: 100/100.** $0 / $0 / $0 free preview tier — the top of the scale. *Excluded from Overall; scored independently. Promo, may end without notice.*
- **Overall Score: 55.4/100.** Half-up mean of the five quality dims (52+72+76+15+62)/5 = **55.4** (Cost excluded). Best fit: a free, competent mid-tier reasoning/long-writing endpoint for experimentation while it is on promo — but it is a **stealth, low-confidence entry**: no absolute capability benchmark confirms the class, and the current queue average (73) appears to lean on the unconfirmed identity/capability assumption, which this report deliberately does not.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-13 (aligned to `RULES.md` / `model-report-TEMPLATE.md`; folder had `meta.json` + `average.md` + peer raters but no `Qwen_3.8_Flash.md`, so this slug **is in `model-queue.md`** at Overall 73 and this file adds one more independent, provisional rater)
- Method: public internet research (2 searches + 1 direct fetch of the NiteAgent Arena leaderboard); scores are normalized 1–100 interpretations, not official vendor scores. Every scored row is an exact-ID measured number (the arena judgment leaderboard) or a confirmed spec (256K, $0); **no Microsoft MAI figures are used as a lineage proxy** because the stealth identity is unconfirmed. Standard capability benchmarks (AA/LMArena/SWE-bench/GPQA) do not index the stealth id, so this report is marked **provisional / low confidence** rather than self-excluded (a niche exact-ID leaderboard does exist).
- Reference URLs (only pages actually retrieved this pass; search-surfaced claims are labelled as such and not listed as fetched evidence):
  - [NiteAgent Arena — leaderboard + match history (exact-ID `stealth/glyph-cluster:free`)](https://niteagent.com/arena/)  ← *fetched*
  - Identity/throughput/free-tier claims — surfaced via web search only (not directly fetched this pass, given as leads): r/opencode "Glyph Cluster Investigation — Microsoft MAI?" (`reddit.com/r/opencode/comments/1x1aoeu`), r/vercel (`reddit.com/r/vercel/comments/1x1d60n`), aipromonow / legalagent free-tier notes, `github.com/peter123023/awesome-free-llm-api`, X/CommandCode throughput report (`x.com/CommandCodeAI/status/2108034965938319768`)
- Future sources: add a new file next to this one using the same headings; re-score once the vendor discloses identity or AA/LMArena indexes the exact id.
