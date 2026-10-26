# Kimi K2.8 Preview — findings by Qwen 3.8 Max

- Source: Moonshot AI (`kimi-k2.8-preview`)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.8 Preview
- **Short description:** Moonshot AI's **September-11-2026** preview model that **bridges K2.7 Code and the K3 flagship** — vendor-positioned as "**performance close to K3, with more efficient thinking**." It adds **vision** (multimodal), a **1M context across all membership tiers**, and **K3's three thinking levels (low / high / max)**. It ships inside Kimi Code under the **unchanged `kimi-for-coding` model ID**, which is why it is easy to miss on API/price sheets.
- **Provider / access:** Moonshot AI; **proprietary license** (closed weights, API/subscription only — *not* open-weight like K2.7 Code's MIT). Served through Kimi Code (Plus/Moderato tiers and up) with the **model ID unchanged (`kimi-for-coding`)**; available via 1 provider (Moonshot AI). **Preview** designation = active development / early access, pre-GA.
- **Release / knowledge:** Released **September 11, 2026**; knowledge cutoff not published. Technical specs were "**under embargo during the preview phase**" (Emergent), so no numeric benchmark sheet was released.
- **IDs:** curated `moonshot/kimi-k2-8-preview`; **actual serving ID `kimi-for-coding`** (unchanged from K2.7 Code, per the official Kimi Code "What's New" note). **No Artificial Analysis page** (AA `kimi-k2-8-preview` → 404) and **no Vals row** — it is not tracked as a separate SKU by the neutral harnesses.
- **Context window:** **Up to 1M tokens**, officially "available across all membership tiers" (Kimi Code release note; corroborated by LLM-Stats "1.0M-token context window"). No independent long-context-retrieval validation published.
- **Modalities:** **Text + image in → text out.** LLM-Stats confirms multimodal (text and images); Emergent: it "introduces vision understanding to the Kimi [coding] family… beyond the text-only K2.7 variants." No video/audio output; text-only out.
- **Pricing (as of 2026-10-26):** **No standalone published per-token price.** It is bundled into the **Kimi Code membership/plan** (1M context gated by tier); Moonshot's API is pay-as-you-go but no separate K2.8 line appears on any price sheet (it bills as `kimi-for-coding`). Cost efficiency is therefore not independently verifiable.
- **Architecture:** Closed weights; parameters undisclosed. Distinguished by **adjustable thinking effort (low / high / max, default max — same levels as K3)** and "significantly more efficient thinking than K2.7 Code."

### Raw benchmarks found

> ⚠ **META CORRECTION (factual error in the curated `meta.json`).** The scaffolded meta asserts: *"No such Moonshot model could be verified as of 2026-10-20… negative record, self-excluded report"* and *"the slot between K2.7 Code and K3 that never shipped."* **This is incorrect.** Kimi K2.8 Preview **did ship — on September 11, 2026**, confirmed independently by the **official Kimi Code "What's New" doc**, LLM-Stats, Emergent.sh, and multiple secondary write-ups. The curator's verification missed it because it **rolls out under the *unchanged* `kimi-for-coding` model ID** — there is no distinct `kimi-k2.8-preview` SKU on Moonshot's model list / pricing / OpenRouter / Zen, so a separate-SKU check returns a false negative. It is a real, released model, not a "verified absence." I therefore score it rather than self-exclude.
> **Honest limitation:** although the model verifiably exists, its **detailed specs stayed under preview embargo**, so there are **no independent numeric benchmarks** (no AA Index — the page 404s; no Vals row; no published SWE-bench / Terminal-Bench / AIME figures). Capability claims below are **vendor/positioning only**; I invent no numbers and score the capability dims conservatively in the vendor-only band, while the spec-derived dims (Context, Multimodal) rest on verified facts.

Vendor / official positioning (Kimi Code release note, Emergent, LLM-Stats — no neutral-harness numbers exist):

- "**Performance close to K3, with more efficient thinking** — coding and agent capabilities improved across the board, significantly more efficient thinking than K2.7 Code."
- "**Adjustable thinking effort**: same thinking levels as K3 — **low / high / max (default max)**." With thinking off, K3-series and K2.8 Preview requests are served by K2.8 Preview (no thinking).
- "**1M ultra-long context** available across all membership tiers"; multimodal (text + image); **proprietary** license; **preview** (pre-GA), specs under embargo.
- Family anchors (for scale, separately sourced — *not* K2.8 numbers): **K2.7 Code** = Vals #1 open-weight SWE-bench Verified 78.2% / TB2.1 67% (262K, MIT); **K3** = Vals SWE-bench 92/95/93/67; **K3.1 Pro** (Oct 23, 2026) = 3T-class, 1M context.

> Provenance: existence, release date, 1M context, multimodality, three thinking tiers, proprietary license, and the `kimi-for-coding` ID are **verified** (official Kimi Code doc + LLM-Stats + Emergent). "Close to K3" / "improved across the board" / "more efficient thinking" are **vendor positioning with no independent numeric benchmark** (preview embargo). No AA Intelligence Index (404), no Vals row.
> Meta verification: **corrected** — see ⚠ above. Verified true: bridges K2.7 Code ↔ K3 ✓, 1M (claimed) ✓ (now officially confirmed), `noFreeId` ✓ (membership-gated). Verified **false**: "no such model / never shipped / self-excluded" ✗ (shipped 2026-09-11), "1M claimed but never confirmed" ✗ (officially confirmed across tiers), "no published figure" for modality ✗ (text+image confirmed). Enriched: release **Sept 11 2026**, **proprietary**, **three thinking levels (low/high/max)**, ships as **`kimi-for-coding`**.

### Normalized scores (1–100)

- **Tool use: 78/100.** Runs inside the **Kimi Code agentic platform** (tool calls, built-in browser + visual annotation, tower multi-agent, subagents) and the vendor states **agent capabilities are "improved across the board"** vs K2.7 Code (a top open-weight agent). Held to the vendor-only band because there is **no independent agentic benchmark** for K2.8 (no AA, no Vals, no Terminal-Bench figure) and it is a pre-GA preview.
- **Reasoning: 76/100.** **Three thinking levels (low / high / max, default max) — the same tiers as K3** — and "significantly more efficient thinking than K2.7 Code," positioned "close to K3." Strong vendor framing, but **no independent reasoning score exists** (no AA Index — 404, no AIME/GPQA/HLE published), so it sits in the no-independent-index band rather than higher.
- **Context window: 85/100.** **1M tokens, officially confirmed** "across all membership tiers" — the proven-1M band (85–86). Kept at the band floor (not 86–87) because it is "**up to** 1M," membership-gated, preview-stage, and has **no independent long-context-retrieval validation** (no AA-LCR / RULER figure).
- **Multimodal: 78/100.** **Text + image in → text out**, independently confirmed (LLM-Stats; Emergent: "introduces vision understanding… beyond the text-only K2.7 variants"). A genuine capability expansion, but newly-added vision with **no published vision benchmark** (no MMMU-Pro figure) — the image-input tier.
- **Coding: 78/100.** The vendor's headline: "**performance close to K3**," coding "improved across the board" vs K2.7 Code (which was Vals #1 open-weight at SWE-bench Verified 78.2%). Positioning between K2.7 Code and K3 (Vals SWE 92/95/93/67) implies strong coding — but there is **zero published SWE-bench / Terminal-Bench number for K2.8** (embargoed preview), so it is scored in the vendor-only/no-independent band, not on the family's verified figures.
- **Cost efficiency: 70/100.** **No standalone published price** — it bills as `kimi-for-coding` inside the **Kimi Code membership** (1M context tier-gated), and it is **proprietary**. Value cannot be independently verified per token; a neutral mid score with the pricing opacity noted. Not counted toward Overall.
- **Overall Score: 79/100.** Mean of Tool 78 + Reasoning 76 + Context 85 + Multimodal 78 + Coding 78 = 395 / 5 = 79.0 → 79. Best fit: developers already in the **Kimi Code** ecosystem who want **K3-adjacent coding/agent quality with vision and a 1M window at K2.7-era efficiency**, and who accept **preview** volatility; for a stable, benchmarked, open-weight option use **K2.7 Code (MIT)**, or step up to **K3 / K3.1 Pro** for verified frontier capability. **Divergence note:** curated queue 79.1 vs my 79 → **−0.1** (essentially aligned). The verified specs (1M context 85, multimodal 78) carry the score while the **capability dims stay in the vendor-only band (76–78)** because the preview embargo left **no independent benchmark** — so my score neither inherits the meta's false "does-not-exist" framing nor over-credits unverified "close to K3" claims.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-26
- Method: public internet research (official **Kimi Code "What's New"** release note for the Sept-11-2026 rollout, unchanged `kimi-for-coding` ID, three thinking levels, 1M context, "close to K3"; **LLM-Stats** for release date / 1.0M context / multimodal / proprietary license; **Emergent.sh** launch coverage for preview-embargo status and vision; AA `kimi-k2-8-preview` attempted → 404, no Vals row). **Corrected the curated meta's false "never shipped / self-excluded" record.** Capability scores are conservative normalized interpretations of *vendor positioning* (no independent numeric benchmark exists); no benchmark values were invented.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
