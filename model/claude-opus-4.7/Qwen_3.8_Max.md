# Claude Opus 4.7 — findings by Qwen 3.8 Max

- Source: Anthropic (`claude-opus-4.7`; AA id `claude-opus-4-7` "(max)" reasoning variant, BenchLM reasoning page `claude-opus-4-7-adaptive` — the non-reasoning BenchLM sibling `claude-opus-4-7` is a different model and is **not** used here)
- Date: 2026-10-21 (UTC)
- Re-researched: 2026-11-02 (UTC) — original draft preserved below; independent sources added.
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict (2026-11-02):** the April draft was built **entirely on Anthropic's vendor system card** — every headline number (GPQA 94.2, HLE 54.7, SWE-bench 87.6, MCP-Atlas 77.3, CharXiv) is a vendor-run cell — so this pass is about laying the independent Artificial Analysis / BenchLM layer underneath it, not about reversing findings. Three things move. **(1) The reasoning story is a notch weaker than the vendor table.** AA's independent re-runs read **GPQA-Diamond 91.4** (vs the announced 94.2), **AA-HLE 42.3** (vs 46.9 no-tools), **CritPt 12.0** and an **ARC-AGI-3 0.2** — strong-but-not-dominant, exactly the tier the AA Intelligence Index (last v5.0 read **40.7**, ≈ class median 37, a clear step below the frontier) implies. Reasoning **89 → 87**. **(2) The tool-orchestration "best-in-class" claim only partly survives contact.** Vendor **MCP-Atlas 77.3** and AA's **τ²-bench 88.6** are real, but AA's harder agentic instruments are mid — **AA Agentic Index 39.5**, **OSWorld 2.0 18.2**, **GDPval-AA Elo 1396**, **AA ITBench 46.7** — so Tool **90 → 88**. **(3) The long-context gap closes upward.** The draft capped Context for "no retrieval benchmark published" and a source-ambiguous window; AA now **confirms 1M** authoritatively and posts a solid **AA-LCR 78.7**, so Context **87 → 88**. AA also supplies the honesty ceiling the draft never measured: **AA-Omniscience accuracy 48.9 / hallucination 42.3%**. Coding (AA Coding Index 73.6, AA Terminal-Bench 2.1 83.1) and Multimodal (AA-MMMU-Pro 78.8) corroborate the vendor picture and hold. **Overall 88 → 87** — a provenance recalibration, not a capability change: the model is unchanged (AA marks it **deprecated**, superseded by Opus 4.8), but replacing a vendor-only table with independent instruments trims the two dimensions Anthropic's launch leaned hardest on.

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's April-2026 flagship and, at release, the most capable **generally available** Claude (the restricted Claude Mythos Preview remained broadly ahead). A focused upgrade over Opus 4.6 rather than a leaderboard sweep — the headline gains are in production coding (SWE-bench Pro +10.9), best-in-class tool orchestration (MCP-Atlas), computer use, and a 3x-resolution vision jump; the one clear regression is agentic web search (BrowseComp −4.4). First Opus to ship Anthropic's production cybersecurity safeguards.
- **Provider / access:** Anthropic API (`claude-opus-4-7`), Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry; across Claude plans.
- **Release / knowledge:** Released 2026-04-15/16 (GA); knowledge cutoff **Jan 1, 2026** per Artificial Analysis (the April draft had it unpublished).
- **IDs:** `anthropic/claude-opus-4-7` (successor to Opus 4.6; superseded by Opus 4.8).
- **Context window:** Up to 1M tokens per llm-stats; Anthropic's own docs are vague ("same context window as Opus 4.6", historically 200K standard with a 1M extended/beta tier). An **updated tokenizer** maps identical input to ~1.0–1.35x more tokens, so the effective window shrinks versus prior Claudes; task budgets (public beta) help cap long runs. **AA (2026-11-02) lists the window at 1M authoritatively, removing the source ambiguity that capped the Context score in the draft.**
- **Modalities:** text + image in → text out; reasoning yes (effort levels low…high, **new `xhigh`** between high and max, then max; Claude Code defaults to `xhigh`); tool calls yes (best-in-class multi-tool orchestration; `/ultrareview` in Claude Code; Auto mode extended to Max users).
- **Pricing (as of 2026-10-21):** $5 input / $25 output per 1M tokens — unchanged from Opus 4.6, but the tokenizer inflation (~1.0–1.35x) and heavier thinking at high effort raise real spend-per-task.
- **Architecture:** Undisclosed proprietary; vision accepts images up to 2,576 px on the long edge (~3.75 MP), **>3x** the resolution of prior Claude models.

### Raw benchmarks found

Agent / tool use (Anthropic system card, vendor-run; vs GA rivals):

- MCP-Atlas (scaled multi-turn tool use): **77.3%** — **best-in-class**, ahead of Opus 4.6 (75.8%), Gemini 3.1 Pro (73.9%), GPT-5.4 (68.1%)
- OSWorld-Verified (computer use): **78.0%** — leads GA models (Opus 4.6 72.7%, GPT-5.4 75.0%), within 1.6 pts of Mythos Preview (79.6%)
- Finance Agent v1.1: **64.4%** — leads (GPT-5.4 Pro 61.5%, Opus 4.6 60.1%, Gemini 3.1 Pro 59.7%); Anthropic also claims SOTA on GDPval-AA
- BrowseComp (agentic search): **79.3%** — the one **regression** (Opus 4.6 83.7%; trails GPT-5.4 Pro 89.3%, Gemini 3.1 Pro 85.9%, Mythos 86.9%)

Reasoning / knowledge:

- GPQA Diamond: **94.2%** — frontier cluster (Gemini 3.1 Pro 94.3%, GPT-5.4 Pro 94.4%, Mythos 94.6%; up from Opus 4.6's 91.3%); benchmark near saturation
- Humanity's Last Exam: **46.9%** no-tools / **54.7%** with tools — up from Opus 4.6 (40.0/53.3), beats Gemini 3.1 Pro no-tools (44.4) and with-tools (51.4); below Mythos Preview (56.8/64.7) and GPT-5.4 Pro with-tools (58.7)
- MMMLU (multilingual Q&A): **91.5%** — up slightly from Opus 4.6 (91.1%); Gemini 3.1 Pro leads (92.6%)

Coding:

- SWE-bench Verified: **87.6%** — leads GA models (+6.8 over Opus 4.6's 80.8%; Gemini 3.1 Pro 80.6%); only Mythos Preview higher (93.9%)
- SWE-bench Pro (multi-language): **64.3%** — leads GA (+10.9 over Opus 4.6's 53.4%; GPT-5.4 57.7%, Gemini 3.1 Pro 54.2%); Mythos 77.8%
- Terminal-Bench 2.0: **69.4%** — +4 over Opus 4.6 (65.4%), edges Gemini 3.1 Pro (68.5%); below GPT-5.4 (75.1%, self-reported harness) and Mythos (82.0%)
- Partner evals: Cursor +12 pts on CursorBench (58→70%); Warp passed Terminal-Bench tasks prior Claudes failed

Multimodal:

- CharXiv Reasoning (scientific figures): **82.1%** no-tools / **91.0%** with tools — the **largest single-benchmark jump** in the table (+13 over Opus 4.6's 69.1); one partner's pen-test visual acuity went 54.5%→98.5%
- Driven by the 3x vision-resolution increase (2,576 px / ~3.75 MP); text + image only (no native video/audio)

Long context:

- Up to 1M tokens (disputed — see Model card); no MRCR / needle retrieval score published. Tokenizer inflation and heavier high-effort reasoning erode the practical window; task budgets (beta) mitigate spend.

> Provenance: benchmark figures are from **Anthropic's official system card** (vendor-run), compiled by Vellum (2026-04-16) and llm-stats. Claude Mythos Preview — a separate, more restricted model — leads Opus 4.7 on most rows (SWE-bench Pro 77.8, Verified 93.9, Terminal-Bench 82.0, GPQA 94.6, HLE w/tools 64.7), so Opus 4.7 is scored here as the top **GA** Claude of its generation, not the absolute frontier. The context window is genuinely ambiguous across sources (llm-stats "1M"; Vellum "same as Opus 4.6"); treated conservatively. A cross-article discrepancy exists on MCP-Atlas (77.3% here from the Opus-4.7-specific system-card table vs 79.1% in Vellum's later GPT-5.5 comparison); the dedicated 4.7 figure is used. BrowseComp regression and tokenizer inflation are documented downsides.

Independent (**added 2026-11-02 — Artificial Analysis, id `claude-opus-4-7` "(max)" reasoning variant; BenchLM reasoning page `claude-opus-4-7-adaptive`, Overall 68.11, #21/1004, 39 of 724**):

- **AA marks the model DEPRECATED** (superseded by Opus 4.8); only the default 10k-input workload continues, so composite Index/Cost/Verbosity are largely N/A. **Speed 55.0 tok/s (#163/195 — notably slow, median 87)**; **$5/$25, 90% cache discount** confirmed; **context 1M and input text+image confirmed**; **knowledge cutoff Jan 1, 2026**.
- **AA Intelligence Index (v5.0, last read): 40.7** — ≈ class median (37), a tier below the frontier; the draft carried no AA Index (it was a vendor-only table).
- Reasoning / knowledge, independent: **AA-GPQA-Diamond 91.4** (vs vendor 94.2), **AA-HLE 42.3** (vs vendor 46.9 no-tools), **CritPt 12.0**, **ARC-AGI-3 0.2** (ARC Prize official).
- Honesty (**the ceiling the draft never measured**): **AA-Omniscience Index 27.3 / accuracy 48.9 / hallucination 42.3%**.
- Long context: **AA-LCR 78.7** (closes the draft's "no retrieval score published" gap).
- Agentic, independent: **τ²-bench 88.6** (AA), **AA Agentic Index 39.5**, **GDPval-AA Elo 1396**, **AA ITBench 46.7**, **AA-AnalystAgent 43.8**, **OSWorld 2.0 18.2** (paper), **JobBench 45.9**; coding **AA Coding Index 73.6**, **AA Terminal-Bench 2.1 83.1**; visual **AA-MMMU-Pro 78.8**.
- **Quarantined (competitor-run, sourced to OpenAI's "Introducing GPT-5.5" comparison table — not independent):** CyberGym 73.1, OfficeQA Pro 43.6, FrontierMath legacy 43.8, MRCR v2 128K-256K 59.2, ARC-AGI-2 75.8. Recorded, **not** used for scoring.

### Normalized scores (1–100)

- **Tool use: 88/100.** *(90 → 88 — the vendor "best-in-class" framing is partly tempered by independent agentic reads.)* Best-in-class MCP-Atlas (77.3%) leads every GA model, OSWorld-Verified (78.0%) tops GA computer use and nears Mythos, and Finance Agent v1.1 (64.4%) leads; AA's independent **τ²-bench 88.6** corroborates strong orchestration. Held below the mid-90s by the BrowseComp regression (79.3), by Mythos Preview still leading, and now by AA's harder agentic instruments landing mid — **AA Agentic Index 39.5**, **OSWorld 2.0 18.2**, **GDPval-AA Elo 1396**, **AA ITBench 46.7**.
- **Reasoning: 87/100.** *(89 → 87 — independent re-read.)* GPQA Diamond 94.2% (vendor) sits in the saturated frontier cluster and HLE improved to 46.9/54.7; capped because it is "strong but not dominant" (Mythos Preview 56.8/64.7 and GPT-5.4 Pro with-tools 58.7 remain ahead). The AA layer is a notch lower and reinforces the cap: **AA-GPQA-Diamond 91.4**, **AA-HLE 42.3**, **CritPt 12.0**, **ARC-AGI-3 0.2**, plus an honesty ceiling of **AA-Omniscience accuracy 48.9 / hallucination 42.3%** — strong-but-not-dominant, ≈ the v5.0 Index 40.7 tier.
- **Context window: 88/100.** *(87 → 88 — provenance lift, not a capability change.)* Up to 1M tokens with task budgets for long runs; **AA now confirms the 1M window authoritatively** (removing the source ambiguity the draft flagged) and posts a solid **AA-LCR 78.7**, closing the draft's "no published retrieval benchmark" gap. Still held short of the 90s because the new tokenizer inflates identical input by ~1.0–1.35x, shrinking the effective window.
- **Multimodal: 83/100.** A genuine capability unlock — CharXiv 82.1/91.0 (the table's largest +13 jump) on 3x-higher-resolution (~3.75 MP) vision, plus strong computer-use screenshot reading; capped because Claude is text+image only (no native video/audio) and MMMLU (91.5%) trails Gemini 3.1 Pro.
- **Coding: 89/100.** The clear headline — SWE-bench Verified 87.6% and SWE-bench Pro 64.3% both lead all GA models (with big +6.8 / +10.9 generational gains) and partners confirmed real-world resolution; held below 90 because Terminal-Bench 2.0 (69.4%) trails GPT-5.4/Mythos and Mythos Preview leads every coding row.
- **Cost efficiency: 62/100.** Premium frontier pricing ($5/$25, unchanged from Opus 4.6) that is now compounded by a tokenizer mapping the same input to ~1.0–1.35x more tokens plus heavier high-effort reasoning — real spend-per-task rises even though the sticker did not; cheaper than Fable 5 ($10/$50) and far cheaper than GPT-5.5 Pro, but a poor fit for token-constrained workloads.
- **Overall Score: 87/100.** *(88 → 87 — a recalibration, not a capability change.)* Mean of Tool 88 + Reasoning 87 + Context 88 + Multimodal 83 + Coding 89 = 435/5 = 87.0 → 87. Best fit: production coding agents, multi-tool orchestration, computer-use automation and agentic financial/knowledge work where best-in-class tool use and a large SWE-bench gain matter most and the price is acceptable; research-heavy web-browsing agents should weigh the BrowseComp regression (GPT-5.4 Pro / Gemini 3.1 Pro lead there), the absolute hardest tasks still favor Claude Mythos Preview, and AA now marks the model deprecated in favor of Opus 4.8.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-21
- Method: public internet research (Anthropic's official Opus 4.7 system card via Vellum's benchmark explainer and llm-stats launch research; cross-checked against the Vellum GPT-5.5 comparison table); scores are normalized 1–100 interpretations, not official vendor scores.
- Re-research (2026-11-02): independent layer added from Artificial Analysis (id `claude-opus-4-7` "(max)" reasoning variant, **deprecated**) and BenchLM reasoning page `claude-opus-4-7-adaptive`. Conflict handling: AA's independent re-runs govern over the vendor system-card cells for GPQA/HLE; competitor-run cells sourced to OpenAI's "Introducing GPT-5.5" comparison table (CyberGym, OfficeQA Pro, FrontierMath legacy, MRCR v2, ARC-AGI-2) are **quarantined** and not scored; the non-reasoning BenchLM sibling is excluded. Guards: the model is deprecated — do not read its composite Index/Cost as current (AA retains only the 10k workload); the v5.0 Index 40.7 is a last-read, not an updated, value.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
