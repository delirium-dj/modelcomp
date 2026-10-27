# GPT-5.1 Codex — findings by Qwen 3.8 Max

- Source: OpenAI (`gpt-5.1-codex`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex
- **Short description:** OpenAI's **November-2025 agentic-coding** model — the **repo-scale "middle child"** of the Codex lane (between Codex Mini and Codex-Max), tuned for whole-codebase software engineering. Independent harnesses put it at **mini-SWE-agent 66.0%** and **Terminal-Bench 2.0 36.9%**. **400K context / 128K out**, **Responses-API-only** access. Now **deprecated** (API shutdown 2026-07-23) — superseded by GPT-5.2 Codex.
- **Provider / access:** OpenAI **Responses API only** (`gpt-5.1-codex`; **API shutdown 2026-07-23**); was listed on **OpenCode Zen** at $1.07/$8.50 before shutdown. **No free tier** (`noFreeId: true`). Proprietary / closed weights.
- **Release / knowledge:** Released **November 2025**; **knowledge cutoff September 30, 2024**. **Deprecated** (AA banner → GPT-5.2 Codex).
- **IDs:** `opencode/gpt-5.1-codex`; AA `gpt-5-1-codex` (reasoning / "high" effort variant).
- **Context window:** **400,000 total / 128,000 max output** (AA-confirmed).
- **Modalities:** **Text + image in → text out** (AA-confirmed). Reasoning model with selectable effort (the "high" variant AA tracks). No video/audio; text-only output.
- **Pricing (as of 2026-10-27):** OpenAI native **$1.25 / $10.00** per 1M in/out (**$0.125 cached**, 90% cache discount); OpenCode Zen had listed **$1.07 / $8.50**. AA: "reasonably priced" — $1.25 input is competitive (median $2.00), $10.00 output at median.
- **Architecture:** Proprietary; parameters undisclosed. Agentic-coding-specialized reasoning model with configurable thinking effort (medium/high; Max adds xhigh).

### Raw benchmarks found

> Independent anchors: **Artificial Analysis** (`gpt-5-1-codex`, deprecation-flagged, a **2/4-unit** Estimated general-Intelligence Index), **swebench.com** (mini-SWE-agent, independent scaffold), and **Terminal-Bench 2.0 / tbench.ai** (independent, Terminus 2 scaffold). ⚠ The widely-quoted OpenAI SWE-bench Verified figures (**76.5% high / 77.9% xhigh**) belong to **GPT-5.1-Codex-Max** — a *different sibling* — and are **not** reattributed to this middle variant. OpenAI also **stopped evaluating SWE-bench Verified** (Feb 2026, "increasingly contaminated"), so no first-party SWE number is claimed for it now.

Independent (current, rebased):

- **AA Intelligence Index (Reasoning/high): 24 (Estimated), #137/221 — "below average"** among comparable models (**median 28**), with only **2 of 4 units** (a weak/partial estimate reflecting deprecation). AA: "below average in intelligence, but reasonably priced when comparing to other models of similar price." ⚠ This is a **general**-intelligence basket (knowledge, doc reasoning, etc.) — coding-specialized models routinely score below median on it because they're tuned for SWE, not broad knowledge; it is **not** a coding score.
- **AA Speed: 127.7 output tok/s, #42/192 — "notably fast"** (4/4 units).
- **SWE-bench (independent scaffold):** **swebench.com — mini-SWE-agent, GPT 5.1 Codex (medium) 66.00%** ($0.59, 2025-11-24). An independent, scaffold-normalized agentic-coding result.
- **Terminal-Bench 2.0 (independent):** **tbench.ai — GPT-5.1-Codex, Terminus 2 scaffold, 36.9% ± 3.2** (Nov 12, 2025). A mid-range independent agentic terminal/coding score (its successor GPT-5.2 Codex later posted ~66.5% on TB2.0).

Vendor (OpenAI, launch):

- OpenAI positioned GPT-5.1-Codex for **repo-scale agentic engineering** with configurable thinking effort. Its headline SWE-bench Verified claims (**76.5% high / 77.9% xhigh**) were published for **Codex-Max**, the larger sibling — not this middle variant, so they are excluded here to avoid reattribution.

> Provenance: AA Index 24 (2/4-unit general-intelligence estimate, below median) and the 127.7 tok/s speed are neutral; **mini-SWE-agent 66.00%** (swebench.com) and **Terminal-Bench 2.0 36.9%** (tbench.ai) are independent scaffold runs. No first-party SWE-bench Verified number is claimed for this exact SKU (Max's 76.5/77.9 are not reattributed). Coding is therefore graded on the independent 66.0% SWE / 36.9% TB2.0 cluster — solid but mid by Oct-2026 leader standards (Opus 4.7 ~87.6% SWE), and deprecated. **AA Index baskets are version-specific and not convertible.**
> Meta verification: **accurate** — Nov 2025 agentic coding variant ✓, "between Codex Mini and Max" ✓, **400K total / 128K out** ✓ (AA confirms 400K), **$1.25/$10.00** native + $0.125 cached ✓ (AA), OpenCode Zen $1.07/$8.50 ✓, **API shutdown 2026-07-23** ✓ (deprecated), **Responses API only** ✓, **text+image in → text out** ✓ (AA), "newer codex lanes cover the same ground" ✓ (→ GPT-5.2 Codex). AA additionally pins **knowledge cutoff Sep 30, 2024**. No discrepancies — the meta is well-curated.

### Normalized scores (1–100)

- **Tool use: 78/100.** A **dedicated agentic-coding model** built for repo-scale, multi-step software engineering with configurable thinking effort — genuinely agentic by design. But the independent **Terminal-Bench 2.0 36.9%** is mid-range (its successor GPT-5.2 Codex reached ~66.5%), and it's deprecated with API shutdown. Solid-but-superseded agentic tier; below gpt-5.2-codex (which I scored higher on stronger TB2.0/SWE-Pro).
- **Reasoning: 76/100.** **AA Index 24 (only 2/4 units) is "below average"** on the *general*-intelligence basket (median 28) — but that basket under-weights coding, which is this model's specialty, and the estimate is weak/partial (deprecated). It's a reasoning model with selectable effort. Below-median-general-but-coding-tuned band; one notch under gpt-5.2-codex (AA 29, above median).
- **Context window: 82/100.** **400K total / 128K output** (AA-confirmed) — the 400K tier, ample for repo-scale work. Matches my 400K calibration band.
- **Multimodal: 78/100.** **Text + image in → text out** (AA-confirmed) — the verified image-input tier (useful for screenshot/UI-driven coding). No video/audio; text-only output.
- **Coding: 80/100.** The defining purpose. Independent **mini-SWE-agent 66.00%** (swebench.com) is a solid agentic-coding result, and **Terminal-Bench 2.0 36.9%** is mid; OpenAI positioned it for repo-scale engineering. Well-evidenced but **mid-range** by Oct-2026 leader standards (Opus 4.7 ~87.6% SWE), and deprecated. Max's 76.5/77.9% vendor SWE are *not* credited (different sibling). Strong-published/independent-corroborated tier.
- **Cost efficiency: 76/100.** **$1.25/$10.00** with a **90% cache discount ($0.125 cached)** and **127.7 tok/s** — AA calls it "reasonably priced" (input below median, output at median). Competitive for a dedicated agentic coder, though not cheap in absolute terms and now unavailable first-party. Not counted toward Overall.
- **Overall Score: 79/100.** Mean of Tool 78 + Reasoning 76 + Context 82 + Multimodal 78 + Coding 80 = 394 / 5 = 78.8 → 79. Best fit: the **repo-scale Codex middle child** — a dedicated, fast (128 tok/s), reasonably-priced agentic coder with a 400K window and independently-corroborated ~66% mini-SWE / 36.9% TB2.0 — but **deprecated (API shutdown 2026-07-23), Responses-API-only, below-median on the general AA Index, and superseded by GPT-5.2 Codex**. Use **GPT-5.2/5.3 Codex** for anything new. **Divergence note:** curated queue 75.6 vs my 79 → **+3.4**. The gap is because I credit the **real 400K context (82)** and **text+image modality (78)** at face value and grade coding on the **independent 66.0% mini-SWE** cluster, whereas the curated score appears to lean harder on the **below-median general AA Index 24 (2/4 units)** and deprecated status. Both readings are defensible; the general Index is a poor proxy for a coding-specialist, so I weight the independent SWE/TB2.0 evidence and the concrete context/modality specs higher. Consistent with — and just below — its successor gpt-5.2-codex (80).

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-27
- Method: public internet research (Artificial Analysis `gpt-5-1-codex` reasoning/high page — deprecation-flagged, 2/4-unit Estimated general Index 24 #137/221 below median 28, 127.7 tok/s, 400K, text+image, knowledge Sep 2024; swebench.com leaderboard for the independent mini-SWE-agent 66.00% run; tbench.ai Terminal-Bench 2.0 leaderboard for the independent 36.9% ± 3.2 (Terminus 2) run; OpenAI "Building more with GPT-5.1-Codex-Max" + simonwillison.net for the Codex-Max 76.5%/77.9% SWE figures — explicitly NOT reattributed to this middle variant; OpenAI "Why we no longer evaluate SWE-bench Verified" Feb 2026; OpenAI Codex changelog + pricing for the Nov-2025 release, Responses-API-only access, and 2026-07-23 shutdown); scores are normalized 1–100 interpretations, not official vendor scores. AA Index baskets are version-specific and not cross-converted.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
