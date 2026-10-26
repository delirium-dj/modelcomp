# Claude Sonnet 4.5 — findings by Qwen 3.8 Max

- Source: Anthropic (`claude-sonnet-4.5`)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's Sept-2025 mid-tier flagship that made **long-horizon agentic coding a $3/$15 feature** — at launch the "best coding model in the world," "strongest model for building complex agents," and "best model at using computers" (OSWorld 61.4%, 30+ hour autonomous focus). **Now deprecated**: superseded by Sonnet 4.6 and the 5.x line *at the same price*; it survives as a compatibility default.
- **Provider / access:** Anthropic API `claude-sonnet-4-5` (`opencode/claude-sonnet-4.5`); also on Amazon Bedrock / Google Vertex AI. **No free tier** (`noFreeId: true`). Closed weights.
- **Release / knowledge:** Released **September 29, 2025**; knowledge cutoff unknown (Epoch AI).
- **IDs:** `opencode/claude-sonnet-4.5`; Anthropic `claude-sonnet-4-5`.
- **Context window:** **200,000** tokens standard (64K max output); **1M beta** gated to usage Tier 4+.
- **Modalities:** Text + image + **file (PDF/document)** in → text out. No audio/video input; text-only output. Reasoning-capable (extended/hybrid thinking).
- **Pricing (as of 2026-10-26):** **$3.00 / $15.00** per 1M in/out (unchanged from Sonnet 4), **$0.30 cached** input. Premium mid-tier pricing — and since Sonnet 4.6 / 5 now cost the same, the value case for *this* checkpoint is weak.
- **Architecture:** Closed weights; parameters, training compute, and dataset undisclosed (Epoch AI lists all as Unknown). Ships with the Claude Agent SDK, context editing, and a memory tool for long-running agents.

### Raw benchmarks found

> Independent anchors: Epoch AI (ECI composite + its own harness runs) and swebench.com (mini-SWE-agent). Vendor figures are from Anthropic's launch announcement / system card. **No current Artificial Analysis page** (the `claude-sonnet-4-5` AA route 404s — consistent with deprecation), so no AA Intelligence Index is available for this checkpoint.

Independent:

- **Epoch AI ECI score 147 → #75 of 253** tracked models *now*; **at release it ranked #3 of 157** — a steep relative drop as the field advanced (the classic deprecated-former-flagship pattern).
- Epoch AI independent harness: **SWE-bench Verified 71%** (vs Anthropic's 77.2% claim — different harness), **GPQA Diamond 82%**, **OTIS Mock AIME 2024-25 78%**, FrontierMath Tiers 1-3 (v2) **24%** / Tier 4 **2%**, SimpleQA Verified **31%**, Chess Puzzles 10%, Mystery Game Puzzles 17%.
- swebench.com leaderboard (mini-SWE-agent, 2026-02-17): **Claude 4.5 Sonnet (high) 71.40**, $0.66/task.
- Launch-relative standing (Epoch ECI): Sonnet 4.5 **147** vs GPT-5 150, Grok 4 146, Claude Opus 4.1 144 — i.e. a mid-tier Sonnet that punched at frontier-flagship level in Sept 2025.

Vendor (Anthropic launch announcement / system card):

- **SWE-bench Verified 77.2%** (n=500) — **state-of-the-art at release**; observed maintaining focus **30+ hours** on complex multi-step tasks.
- **OSWorld 61.4%** — computer-use lead at release (up from Sonnet 4's 42.2% four months earlier).
- Parallel tool execution (multiple bash commands at once); domain experts (finance/law/medicine/STEM) rated it above Opus 4.1; partner reports: Devin +18% planning / +12% end-to-end, one code-editing benchmark 9%→0% error vs Sonnet 4.

> Provenance: Epoch AI (ECI + independent harness) and swebench.com are neutral; the SWE-bench 77.2% / OSWorld 61.4% / 30-hour figures are vendor launch claims. Note the independent SWE-bench Verified (71%) is materially below the vendor claim (77.2%) — a harness difference I weight toward the independent number. No AA page means no currentbasket Intelligence Index; relative standing is taken from Epoch's ECI (#75/253).
> Meta verification: accurate — 200K standard / 1M beta (Tier 4+) ✓, $3/$15 + $0.30 cached ✓, text+image+file ✓, `noFreeId` ✓, "superseded by Sonnet 4.6" ✓ (Epoch confirms the relative decline). Enriched: Epoch **ECI 147 (#75/253 now, #3/157 at release)**, independent **SWE-Verified 71%**, **GPQA-D 82%**, **AIME 78%**, **OSWorld 61.4%** (vendor), 30+ hour autonomy.

### Normalized scores (1–100)

- **Tool use: 82/100.** A landmark agentic model at release — **OSWorld 61.4%** (computer-use SOTA then), **30+ hour** sustained autonomy, parallel tool execution, and the Agent SDK / memory / context-editing infrastructure. Scored for enduring absolute capability but discounted below the current verified-agentic leaders (e.g. GLM-5.3-Flash's Vals >4h=100) since it is deprecated, surpassed on OSWorld, and has no current AA/Vals row.
- **Reasoning: 79/100.** Independent **GPQA Diamond 82%** and **OTIS Mock AIME 78%** are solidly above median, but **FrontierMath T1-3 24%** and **SimpleQA 31%** are weak, and the ECI has slid to #75/253. Deprecated, ~median-to-above reasoning — strong in Sept 2025, mid-pack now.
- **Context window: 77/100.** **200K standard** (64K output) with a **1M beta gated to Tier 4+**. Just above my plain-200K band (76) to credit the 1M beta, but far below proven-1M models (85-86) because the 1M is gated/beta and the standard output allowance is modest.
- **Multimodal: 79/100.** Text + image + **file/PDF** input (verified) with strong document/finance/law/medicine domain reasoning; no video, no audio, text-only output. Image+file tier — above image-only (78), below native-video (82).
- **Coding: 80/100.** Was the **"best coding model in the world" at launch (SWE-bench Verified 77.2% vendor SOTA)**, but the independent Epoch/mini-SWE-agent number is **~71%**, and the model is deprecated and surpassed (Epoch's tracked SWE-bench best is now 83%; current Vals leaders reach 97%). Deprecated-strong: respectable absolute coding, no longer competitive at the frontier.
- **Cost efficiency: 72/100.** **$3/$15** per 1M ($0.30 cached) is premium mid-tier pricing, and because Sonnet 4.6 / Sonnet 5 cost the *same* while performing better, this checkpoint's value-for-money is poor in Oct 2026. Not counted toward Overall.
- **Overall Score: 79/100.** Mean of Tool 82 + Reasoning 79 + Context 77 + Multimodal 79 + Coding 80 = 397 / 5 = 79.4 → 79. Best fit: the **deprecated Sonnet that normalized long-horizon agentic coding at $3/$15** — historically important (launch-SOTA SWE-bench, OSWorld lead, 30-hour autonomy) and still functionally strong, but overtaken by its own successors at identical price and by the current open-weight coding leaders. **Divergence note:** curated queue 81.1 vs my 79 → **−2.1**. The modest negative gap is the launch-peak-vs-current-rebased pattern: the curated score still carries some of its Sept-2025 "#3 model / best coding model" standing, while my read normalizes against the Oct-2026 field (Epoch ECI down to #75/253, independent SWE-Verified ~71% not 77.2%, no current AA Index) and applies the standard deprecation discount — the same treatment I gave kimi-k2.5 (−3.4). It is *not* wider because Sonnet 4.5's absolute capability (GPQA 82%, OSWorld 61.4%, 200K/1M, robust agentic infrastructure) genuinely remains above median.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-26
- Method: public internet research (Epoch AI model page + ECI/harness scorecard for `claude-sonnet-4-5`; Anthropic "Introducing Claude Sonnet 4.5" launch announcement and system card; swebench.com mini-SWE-agent leaderboard; llm-stats / serenitiesai benchmark aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
