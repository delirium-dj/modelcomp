# Claude Opus 4.4 — findings by MiMo 2.6 Flash

- Source: Anthropic `claude-opus-4-4`
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.4 (`claude-opus-4-4`) — the **bridge Opus release between Claude Opus 4.1 (Aug 2025) and Claude Opus 4.5 (Nov 2025)**, and the model line whose patch versions reached **4.4.8**. Real but thinly documented: Anthropic's news index and the current leaderboards (llm-stats, llm-registry SWE-V top-10) no longer track it, and no launch post was retrievable — this report is assembled from corroborating third-party references.
- **Short description:** The last Opus at the old premium price, used from security research (Hacktron attempted its attack with Opus 4.4.8 — it "struggled across multiple sessions to build a working exploit" before Opus 5 superseded it) to academic research ("ChatGPT 5.5 and Claude Opus 4.4–4.6 were used for critical feedback", biorxiv Aug 2026). Devs describe 4.4 as the first Opus that delivered the long-agentic "it just did the whole task" feeling (HN).
- **Provider / access:** Anthropic Claude API (`claude-opus-4-4`), Claude Code, Bedrock/Vertex; reasoning-effort tiers incl. **High** (Scribd "Opus 4.6 Market Shock" doc references "Opus 4.4 High" vs "Opus 4.5 Medium" lanes). Proprietary, no weights.
- **Release / knowledge:** **late 2025**, between Opus 4.1 (2025-08) and Opus 4.5 (2025-11-20) — attri.ai's newsletter ("our engineer answered: Claude Opus 4.4… next month? Probably Opus 4.5") places it roughly October 2025; exact date and knowledge cutoff not recovered.
- **IDs:** `claude-opus-4-4` (inferred from Anthropic's `claude-opus-4-5`/`4-7` id convention; the exact id was never observed directly in this pass — flagged).
- **Context window:** **not captured for 4.4.** Family-era standard is 200K (Opus 4.1 and Opus 4.5 both 200K) — treat 200K as an unverified inference, not a measured spec.
- **Modalities:** text + image in, text out (Claude 4.x family standard); no MMMU figure found for 4.4 specifically.
- **Pricing:** **$15 in / $75 out per 1M — inferred from Anthropic's own framing**: Opus 4.5's launch coverage says its $5/$25 "represents a 67% reduction from the previous Opus" (trilogyai; the arithmetic lands exactly on $15/$75, Opus 4.1's rate card). 3× the price of every later Opus (4.5–5.5 all $5/$25 or less).
- **Architecture:** proprietary — no parameter count disclosed.

### Raw benchmarks found

(provenance quality flagged: no first-party launch table recovered; rows below are third-party relays)

- **DeepSWE:** a social benchmark-chart relay (PAnews/Threads table) shows an "Opus-4.4" row at **~54.2** alongside DeepSeek/Grok figures — column alignment unreliable, treat as indicative only
- **CyberGym:** same relay shows "Opus-4.4" entries around **53.3/63.0** (again, column mapping unverified)
- **FrontierSWE / CharXiv (RQ) w/ tool:** aggregated chart captions place Opus-4.4 in the same band as GPT-5.5 and GLM-5.2 (below Fable 5 / Kimi K3 / GPT-5.6 Sol) — i.e., a tier below the 2026 frontier, above the 2025 mainstream
- **Recall.ai head-to-head:** "GPT-5.5 announces Opus 4.4 as the winner" of a 3-model comparison (product-benchmark, small n)
- **JPMorgan Private Bank webcast (Semiquincententacles):** lists "Claude Opus 4.4" among **top scorers ~55–60** alongside GPT-5.5 (high), Claude Fable 5 (fallback), GLM-4.5 (max)
- **SWE-bench Verified:** no figure found for 4.4; the lineage anchor is Opus 4.5's launch **80.9%** (which "reclaimed #1" — implying 4.4 had *not* held the top spot, unlike 4.5)
- **Security posture (behavioral):** failed at sustained exploit development across sessions in Hacktron (DEF CON Halifax coverage) — a documented capability ceiling for offensive-security agent work

### Normalized scores (1–100)

- **Tool use: 70/100.** The model that sold the "first Opus to run the whole agentic task" feeling (HN), a Recall.ai comparison winner, and JPMorgan top-scorer placement — but no Terminal-Bench/Tau table was recoverable, and it visibly failed long-horizon exploit work in security research.
- **Reasoning: 78/100.** Top-60-band placement on JPMorgan's eval alongside GPT-5.5 and Fable 5, and reasoning-effort tiers up to High — a late-2025 frontier model; no GPQA/HLE figure exists for it in any retrievable source, and it was surpassed by 4.5 within weeks.
- **Context window: 60/100.** No verified window for 4.4; family-era 200K inference only, with zero retrieval measurements — the score reflects evidence absence as much as capability.
- **Multimodal: 58/100.** Claude 4.x-standard text+image input, no model-specific MMMU/vision figure found; typical Anthropic coverage for the era, nothing distinguishing.
- **Coding: 72/100.** DeepSWE ~54.2 (unverified relay), band placement between GPT-5.5 and the 2026 frontier, real-world research/code-feedback usage through 2026 — but 4.5's 80.9% SWE-V launch and the "reclaimed #1" framing show 4.4 was never the coding king.
- **Cost efficiency: 20/100.** $15/$75 — the last Opus at the pre-4.5 premium, 3× every successor, with no cache-discount evidence recovered; the 4.5 price cut exists precisely because 4.4 was expensive.
- **Overall Score: 68/100.** (70 + 78 + 60 + 58 + 72) / 5 = 67.6 → 68 — historical interest only: a capable late-2025 flagship that is superseded, undocumented in first-party sources, and priced 3× its successors; do not choose it today over Opus 4.5+ ($5/$25, SWE-V 80.9+).

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi MiMo-V2.6-Flash)** — 2026-10-27
- Method: public internet research — Anthropic first-party sources attempted and not found (no launch post, no llm-stats/llm-registry page, no system card retrievable for 4.4), so evidence is corroborating third-party references: trilogyai/anthropic pricing framing for the 67% cut, DEF CON Halifax LinkedIn security-research coverage (Opus 4.4.8 patch behavior), biorxiv methodology usage, JPMorgan Private Bank eval band, Recall.ai comparison, HN lineage recollections, Yann Verneau upgrade-path post, Scribd effort-tier doc, and benchmark-chart social relays (DeepSWE/CyberGym/FrontierSWE/CharXiv — column mappings flagged unverified); the $15/$75 price is an explicit arithmetic inference from Anthropic's own "67% reduction" claim. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings — if an official Opus 4.4 launch page/system card resurfaces, replace the inferred rows with first-party figures.
