# GPT-5.5 Pro — findings by Qwen 3.8 Max

- Source: OpenAI (`gpt-5.5-pro`)
- Date: 2026-10-20 (UTC)
- Re-researched: 2026-11-02 (UTC) — original draft preserved below; independent sources added.
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict (2026-11-02):** the draft was entirely vendor (OpenAI system card via Vellum), and its headline Multimodal score rested on the **base GPT-5.5 omnimodal architecture claim** (text/image/audio/video). The independent pass **corrects that**: **Artificial Analysis lists the `gpt-5-5-pro` id as text + image input only → text out** (no audio/video measured), and records a **922k** context window, not 1M. Applying the same modality-provenance discount the dataset uses for GPT-6 Astra, **Multimodal 90 → 84** — image + computer-use vision stay validated (OSWorld 78.7, ARC), the unverified audio/video breadth does not; **Context 94 → 93** for the 922k / inherited-base retrieval. Independent data **confirms the reasoning core**: **ARC-AGI-2 84.2% (ARC Prize)** backs the draft's inherited 85.0, and **Epoch AI's FrontierMath v2 Tier-4 78.0 / Tiers 1–3 87.7** corroborates elite math (version-distinct from the vendor's legacy 52.4 — both recorded, not mixed). Reasoning/Tool/Coding hold. **Provenance caution:** independent Pro-specific coverage is genuinely **thin** — AA returns composite **N/A**, and BenchLM has only **9 of 724** cells, most of them vendor (BrowseComp, HLE, FrontierMath-legacy); only ARC Prize, Epoch and AA-CritPt are neutral. The **Overall drops 91 → 90**, driven almost entirely by the multimodal overstatement being corrected.

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** The higher-accuracy API variant of GPT-5.5 (OpenAI's first fully retrained base model since GPT-4.5, codename "Spud"). It spends materially more reasoning compute than base GPT-5.5 to push the hardest reasoning/agentic benchmarks higher — measurably stronger on FrontierMath, BrowseComp and Humanity's Last Exam — at 6x the token price. Natively omnimodal (text/image/audio/video in one unified architecture) with a 1M-token API window.
- **Provider / access:** OpenAI API (`gpt-5.5-pro`, "all API users — coming soon" at launch); ChatGPT Pro/Business/Enterprise tiers. Not the default Codex/ChatGPT model.
- **Release / knowledge:** Released 2026-04-23 alongside GPT-5.5; knowledge cutoff not published.
- **IDs:** `openai/gpt-5.5-pro`.
- **Context window:** 1,000,000 tokens (API; base GPT-5.5 is 400K in Codex). **AA records 922k for this id (2026-11-02)** — the gap is recorded, not averaged. MRCR v2 retrieval: 74.0% at 512K–1M, 87.5% at 128K–256K (**base-5.5 figures; not Pro-specific**). Max output not separately published.
- **Modalities:** vendor claims natively omnimodal — text + image + audio + video in → text out (single unified architecture). **Conflict (2026-11-02): Artificial Analysis's spec table lists `gpt-5-5-pro` as text + image input only** — no audio/video. Left **unresolved and recorded as such**; the score is trimmed rather than collapsed because image + computer-use vision are independently validated (OSWorld, ARC-Prize) and the audio/video claim is an architecture statement not separately measured for the Pro SKU. Reasoning yes (enhanced/high compute); tool calls yes (browsing, computer use, MCP).
- **Pricing (as of 2026-10-20):** $30.00 / 1M input, $180.00 / 1M output — 6x base GPT-5.5's $5/$30 and "off-scale" vs the frontier; Batch/Flex at half rate, Priority at 2.5x.
- **Architecture:** proprietary (closed weights); hardware co-designed with NVIDIA GB200/GB300 NVL72 rack-scale systems (matches GPT-5.4 per-token latency despite higher capability).

### Raw benchmarks found

Agent / tool use (Pro-specific where published):

- BrowseComp (autonomous web research): **90.1%** (Pro — up from base GPT-5.5's 84.4%; ahead of Gemini 3.1 Pro 85.9%, near Kimi K3's 91.2)
- GDPval (44 real occupations): **82.3%** (Pro; base 5.5 84.9%, GPT-5.4 83.0%, Claude Opus 4.7 80.3%)
- Inherited from base GPT-5.5 (not separately re-reported for Pro): OSWorld-Verified **78.7%** (computer use, edges Opus 4.7 78.0%), Tau2-bench Telecom **98.0%**, MCP Atlas **75.3%** (behind Opus 4.7 79.1%)

Reasoning / knowledge (Pro's core upgrade):

- FrontierMath T1–3: **52.4%** (Pro; base 5.5 51.7%, Opus 4.7 43.8%, Gemini 3.1 Pro 36.9%)
- FrontierMath T4 (hardest): **39.6%** (Pro; base 5.5 35.4%, Opus 4.7 22.9%) — SOTA
- Humanity's Last Exam (no tools): **43.1%** (Pro; base 5.5 41.4%; still behind Claude Opus 4.7 46.9% and Gemini 3.1 Pro 44.4%)
- Inherited base-5.5 reasoning: GPQA Diamond **93.6%**, ARC-AGI-2 (Verified) **85.0%** (ahead of Opus 4.7 75.8% and Gemini 3.1 Pro 77.1%); CyberGym **81.8%** (cyber, "High" capability rating)

Coding:

- Not separately re-reported for Pro; inherits base GPT-5.5's profile with added reasoning compute — Terminal-Bench 2.0 **82.7%** (SOTA, +13.3 over Claude Opus 4.7 69.4%), Expert-SWE (internal, ~20h-median long-horizon) **73.1%**, SWE-bench Pro **58.6%** (behind Opus 4.7 64.3%), CyberGym **81.8%**

Multimodal:

- Natively omnimodal (text/image/audio/video unified); OSWorld-Verified 78.7% confirms computer-use vision. No MMMU-Pro / Video-MMMU figures separately published for Pro in accessible sources.

Long context:

- 1M-token API window; MRCR v2 **74.0%** at 512K–1M (base 5.5, a +37-pt leap over GPT-5.4's 36.6%) and **87.5%** at 128K–256K (vs Claude's 59.2%).

> Provenance: figures from OpenAI's "Introducing GPT-5.5" announcement and ~100-page system card (2026-04-23), tabulated by Vellum. Pro-specific cells are those OpenAI published for `gpt-5.5-pro` (BrowseComp, GDPval, FrontierMath, HLE); dashes in OpenAI's table mean Pro was not separately re-run, so it inherits base GPT-5.5's architecture and scores plus extra reasoning compute. All vendor-reported.

> **Independent cross-check (2026-11-02):** **ARC-AGI-1 95.0 / ARC-AGI-2 84.2 (ARC Prize, independent)** confirm the reasoning core; **Epoch AI FrontierMath v2 Tiers 1–3 87.7 / Tier 4 78.0** (independent, a different benchmark version than OpenAI's legacy 52.4 — recorded separately, not averaged); **AA CritPt 30.6**. AA composite (Index/Speed/Cost/Verbosity) is **N/A** for this id; BenchLM aggregate **72.76, #14/1004** on only **9 of 724** coverage (mostly vendor rows). Gaps that stay genuinely open for the Pro SKU: independent GPQA-Diamond, SWE-bench, and Omniscience-hallucination cells (not published for `gpt-5.5-pro`).

### Normalized scores (1–100)

- **Tool use: 90/100.** Pro's BrowseComp 90.1% (up from base 84.4%) plus inherited OSWorld-Verified 78.7% and Tau2-Telecom 98.0% make it a top-tier autonomous agent; capped because MCP Atlas 75.3% trails Claude Opus 4.7 (79.1%) on chained tool orchestration.
- **Reasoning: 93/100.** *(unchanged, now independently corroborated.)* The Pro variant's reason to exist — FrontierMath T4 39.6% (vendor legacy) and T1–3 52.4%, inherited GPQA Diamond 93.6% — is backed by neutral instruments: **ARC-AGI-2 84.2% (ARC Prize)** and **Epoch AI FrontierMath v2 Tier-4 78.0 / Tiers 1–3 87.7**. Held below the ceiling because HLE no-tools (43.1%) trails Opus 4.7's 46.9% and no independent Pro-specific GPQA/hallucination cell exists.
- **Context window: 93/100.** *(94 → 93.)* A large window (1M claimed; **AA measures 922k**) with strong vendor MRCR v2 (74.0% at 512K–1M, 87.5% at 128K–256K) — but those retrieval figures are **base-5.5, not Pro-specific**, and AA's window is smaller than advertised. Trimmed one point for the window discrepancy and inherited (not independently re-run) retrieval.
- **Multimodal: 84/100.** *(90 → 84 — the report's sharpest correction.)* The draft's 90 rested on the **base GPT-5.5 omnimodal claim (text/image/audio/video)**. **AA's spec table for `gpt-5-5-pro` lists text + image input only**, and no independent audio/video benchmark exists for the Pro SKU. Image capability remains genuinely validated (OSWorld-Verified 78.7% computer-use vision, ARC), so the dim is **trimmed, not collapsed to the text-only floor** — but the unverified audio/video breadth can no longer be scored. Same modality-provenance discount applied to GPT-6 Astra.
- **Coding: 90/100.** Inherits base GPT-5.5's SOTA Terminal-Bench 2.0 82.7% (+13.3 over Opus 4.7), Expert-SWE 73.1% and CyberGym 81.8%, with extra reasoning compute; capped by SWE-bench Pro 58.6% trailing Opus 4.7 (64.3%) and the absence of a Pro-specific coding re-run.
- **Cost efficiency: 40/100.** The weakest axis by design — $30/$180 is 6x base GPT-5.5 and the most expensive per-token model in its comparison set ("off-scale"); Batch/Flex halve it, but for raw cost-per-token this is a premium reasoning-compute product, not a value play.
- **Overall Score: 90/100.** *(91 → 90.)* Mean of Tool 90 + Reasoning 93 + Context 93 + Multimodal 84 + Coding 90 = 450 / 5 = 90.0 → 90. The drop is entirely the **multimodal overstatement being corrected** (audio/video not in AA's spec) plus a one-point context trim; the reasoning core is now independently confirmed (ARC-AGI-2 84.2, Epoch FrontierMath v2). Best fit: maximum-accuracy reasoning, math, long-horizon agentic and browsing where the ~6x token premium buys SOTA-class FrontierMath/ARC and strong retrieval. Caveats: **cost is off-scale ($30/$180)** — not in the mean but decisive in practice — and independent Pro-specific coverage is thin (9 of 724), so several dims lean on base-5.5 inheritance.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-20, re-researched 2026-11-02
- Method: public internet research (OpenAI's "Introducing GPT-5.5" announcement and system card via Vellum's full comparison table; GPT-5.5 Pro pricing/specs corroborated by llm-stats, kingy.ai and tryfriday.ai); the 2026-11-02 pass adds **Artificial Analysis** (`gpt-5-5-pro`, xhigh — composite N/A, spec table text+image / 922k) and the **BenchLM.ai** aggregator (9 of 724) carrying **ARC Prize**, **Epoch AI**, and **AA-CritPt** independent cells. Scores are normalized 1–100 interpretations, not official vendor scores.
- **Conflict handling (explicit, not averaged):** (1) *Modality* — vendor omnimodal (audio/video) vs **AA spec text+image only** → **unresolved, recorded as such**; MM trimmed 90→84 (image validated, audio/video unverified), not collapsed to the text-only floor. (2) *Context* — 1M claimed vs AA 922k → both recorded, dim trimmed 94→93. (3) *Math* — vendor FrontierMath legacy 52.4 vs **Epoch v2 87.7 / Tier-4 78.0** → **different benchmark versions**, recorded separately, not averaged. (4) *ARC-AGI-2* — inherited base 85.0 vs **ARC Prize 84.2** → close, independent confirms. (5) *Pro vs base inheritance* — cells OpenAI did not re-run for Pro (MRCR, GPQA, OSWorld, coding) are labelled **base-5.5 inheritance**, not Pro measurements.
- **Guards applied:** (a) **thin-independent-coverage flagged** — AA composite N/A and BenchLM 9/724, so most cells are vendor or inherited; the honest gaps (independent GPQA / SWE-bench / Omniscience-hallucination for the Pro SKU) are recorded as open, not filled by siblings; (b) **sibling quarantine** — base GPT-5.5 figures used only as explicitly-labelled inheritance, never silently as Pro evidence; (c) **version discipline** on FrontierMath; (d) **Cost efficiency and Speed excluded from the Overall mean**; (e) never read peer raters' findings files (zero-influence). Would close gaps: an independently administered GPQA-Diamond / SWE-bench / Omniscience row under the `gpt-5.5-pro` id.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
