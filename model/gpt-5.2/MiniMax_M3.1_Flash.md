# GPT-5.2 — findings by MiniMax M3.1 Flash

- Source: OpenAI (`gpt-5.2`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's December-2025 flagship — "GPT-5.2 is our previous flagship model for complex professional work" — the generation that took SWE-bench Pro to **55.6%** and AIME 2025 to **100%**, and that shipped a **400K** context (not 1M) with an unusually complete long-context ladder. It is now **deprecated** ("OpenAI has launched a newer release, GPT-5.4"), and it survives as the value pick of the OpenAI line at $1.75/$14.
- **Provider / access:** OpenAI API `gpt-5.2` (snapshot `gpt-5.2-2025-12-11`) — Chat Completions, Responses and Batch; OpenRouter `openai/gpt-5.2` (+ `:batch`, plus `openai/gpt-5.2-codex` and `openai/gpt-5.2-chat`); OpenCode Zen `opencode/gpt-5.2` (`https://opencode.ai/inference/openai/v1/responses`).
- **Release / knowledge:** released **2025-12-11** (launch blog "Introducing GPT-5.2"; OpenRouter's API availability is 2025-12-10). Knowledge cutoff **Aug 31, 2025**.
- **IDs:** `gpt-5.2` (OpenAI API), `openai/gpt-5.2` (OpenRouter), `opencode/gpt-5.2` (Zen). Siblings: `gpt-5.2-codex` (2026-01-14, same prices, coding-specialised), `gpt-5.2-chat` (128K context, 32K output) and `gpt-5.2-pro` ($21/$168).
- **Context window:** **400,000 tokens**, **128,000 max output**. Every source fetched agrees on 400K — there is no 1M variant.
- **Modalities:** text and image in, text out.
- **Reasoning controls:** "Reasoning.effort supports: none (default), low, medium, high and xhigh" — with **none as the API default**. OpenAI's launch table was measured on "GPT-5.2 Thinking, max effort, xhigh".
- **Pricing (as of 2026-10-19, per 1M tokens):** **$1.75 in / $0.175 cached / $14.00 out**; Batch & Flex **$0.875 / $0.0875 / $7.00**; Fast **$3.50 / $0.35 / $28.00**. No cache-write price and no long-context tier. Launch quote: "GPT‑5.2 is priced at $1.75/1M input tokens and $14/1M output tokens, with a 90% discount on cached inputs."
- **Rate limits (standard tier):** Build 5,000 RPM / 1,000,000 TPM; Launch 10,000 / 4,000,000; Grow 15,000 / 40,000,000 (batch queue 3M / 200M / 15B).
- **Architecture:** proprietary, closed weights; parameter count not disclosed. System card `oai_5_2_system-card.pdf` published with the model.

### Raw benchmarks found

> OpenAI's launch-blog numbers are marked "vendor" (GPT-5.2 Thinking, max effort, xhigh); Artificial Analysis, the official swebench.com leaderboard, Vals AI, Epoch AI (via BenchLM) and the BenchLM ledger are independent.

Agent / tool use:

- Tau2-bench: Telecom **98.7%**, Retail **82.0%** (vendor) / 84.80% (AA); GDPval wins-or-ties **70.9%** (Pro 74.1%; clear wins 49.8%; no-ties 61.0%)
- BrowseComp **65.8%** (Pro 77.9%); BrowseComp-LC **92.0% at 128k / 89.8% at 256k** (vendor)
- MCP-Atlas **60.6%**; Toolathlon **46.3%**; OSWorld-Verified 47.3% (via BenchLM); JobBench 34.3% (via BenchLM)
- Factuality: "answers without errors 93.9% (w/ search), 88.0% (no search)"; internal banking spreadsheet 68.4%
- Terminal-Bench 2.0 / 4.0: **no verified public score found** (AA's `terminalBench40` and `terminalBench21` are null; the official board is client-rendered with no extractable GPT-5.2 row)
- AutomationBench-AA / AA-Briefcase / ITBench-AA / GDPval-AA / SciCode / FrontierCode: **all null on AA** for this model

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (vendor) / **90.30%** (AA) / 92.8% (via BenchLM)
- HLE: **34.5%** without tools / **45.5%** with search+Python (vendor) / **37.67%** (AA)
- AIME 2025 **100.0%** (AA: 99.0%); HMMT February-2025 **99.4%**; FrontierMath T1–3 **40.3%** / T4 **14.6%** (vendor, v1) — Epoch's v2 figures are **67.4% / 31.7%**
- ARC-AGI-1 **86.17%** (ARC Prize, via BenchLM) / 86.2% (vendor); ARC-AGI-2 **52.9%** (vendor); MMMLU **89.6%**
- Artificial Analysis Intelligence Index: **30\*** (estimated, #93/217; raw 30.448) / 30.1 (OpenRouter mirror) / 30.4 (via BenchLM); Medium 27, Non-reasoning 17 (TTFA 0.72s); GPT-5.2 Codex (Xhigh) index **28.50**, τ² 92.11%, MMMU-Pro 76.30%, 120.7 t/s
- CritPt **11.55%**; AA-LCR 82.67%; IFBench 75.44%; Omniscience index **-0.88** (accuracy 44.32%, hallucination 81.17%); LiveCodeBench **88.89%** (AA)

Coding:

- SWE-bench Pro (public) **55.6%** (vendor) — "GPT‑5.2 Thinking sets a new state of art of 55.6% on SWE-Bench Pro"
- SWE-bench Verified: **80.0%** (vendor) / **69.0%** and **71.8%** (official swebench.com, mini-SWE-agent v1.17.2, bash-only, effort null and high) / Multilingual **66.7%** (mini 2.0.0a0)
- SWE-Lancer IC Diamond **74.6%** (vendor); LiveCodeBench 88.89% (AA); Vibe Code Bench v1.1 **53.50%** (Vals, `gpt-5.2-2025-12-11`) / 37.91% (for the Codex variant)
- No DeepSWE, no Terminal-Bench, no FrontierMath-direct, no CursorBench row for GPT-5.2

Long context:

- **MRCR v2 8-needle** (vendor, the fullest public ladder of its era): 4–8k **98.2%**, 8–16k 89.3%, 16–32k 95.3%, 32–64k 92.0%, 64–128k **85.6%**, 128–256k **77.0%**; BrowseComp-LC 92.0% (128k) / 89.8% (256k)
- 400K context, 128K max output

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 76/100.** τ²-bench Telecom **98.7%** / Retail 82.0%, BrowseComp-LC 92.0% (128k) / 89.8% (256k), GDPval 70.9% wins-or-ties, MCP-Atlas 60.6%, Toolathlon 46.3%, BrowseComp 65.8%, OSWorld-Verified 47.3%, JobBench 34.3%, factuality 93.9% (with search). Capped by the rubric's anchors (TB2.1 ~88%+ → **not published at all**; τ3 ~50%+ → not published; GDPval ~1750+ → not published on AA), by Terminal-Bench 4.0 having no public score, and by the absence of any AutomationBench-AA, AA-Briefcase or ITBench row.
- **Reasoning: 84/100.** AIME 2025 **100.0%**, HMMT February-2025 **99.4%**, GPQA Diamond 90.30–92.8%, FrontierMath v2 67.4% (T1–3) / 31.7% (T4), ARC-AGI-1 86.17% / ARC-AGI-2 52.9%, MMMLU 89.6%, LiveCodeBench 88.89%. Capped by the current AA Intelligence Index of **30\*** (under the rubric's 60+ anchor), by HLE 34.5–37.67%, by CritPt 11.55%, by ARC-AGI-2 at 52.9%, and by the 81.17% hallucination rate.
- **Context window: 91/100.** 400,000 tokens with a 128,000 max output — the rubric's 200K–500K band (65–84) for the window itself, but raised by the **best-published long-context ladder of its era** (MRCR v2 8-needle 98.2% → 85.6% at 64–128K → 77.0% at 128–256K; BrowseComp-LC 92.0% at 128K). Not 95+ because the window is 400K rather than 1M and retrieval falls to 77% by 256K.
- **Multimodal: 72/100.** Text and image in, text out, with good measured vision — MMMU-Pro 79.5% without tools / 80.4% with Python, Video-MMMU 85.9%, CharXiv 82.1% / 88.7% with Python, ScreenSpot-Pro 86.3% (vendor), and GPT-5.2 Codex's MMMU-Pro 76.30%. The rubric's "+image in = 60–70" band is the ceiling, and the strength of the vision and screen benchmarks justifies the two points above it; no video or audio input is documented.
- **Coding: 76/100.** SWE-bench Pro **55.6%** (a frontier number at launch), SWE-bench Verified 69.0–80.0%, SWE-Lancer IC Diamond 74.6%, LiveCodeBench 88.89%, FrontierMath v2 67.4%, Vibe Code Bench 53.50%, Multilingual 66.7%. Capped by the **absence of any Terminal-Bench, DeepSWE, FrontierSWE or CursorBench figure**, by SWE-bench Pro 55.6%, and by the 11-point spread between OpenAI's SWE-bench Verified claim and swebench.com's own runs.
- **Cost efficiency: 78/100.** The evaluated route — OpenCode Zen `opencode/gpt-5.2` — is billed at **$1.75 in / $14.00 out** per 1M with a **$0.175 cached read** (a 90% discount) and no cache-write price, which the rubric's anchors place at roughly 78; Batch & Flex at $0.875/$7.00 roughly halve it again, while Fast mode triples it. The caveats are the absence of a long-context price tier and a $14 output rate that is high for a model whose index sits at 30.
- **Overall Score: 79.8/100.** (76 + 84 + 91 + 72 + 76) / 5 = 79.8 — best-fit: the **December-2025 value champion** — 100% AIME 2025, 99.4% HMMT, 55.6% SWE-bench Pro, the deepest published long-context ladder of its era and a 90% cache discount — but no Terminal-Bench score at all, a 30\* index, an 81% hallucination rate, and no DeepSWE or FrontierSWE measurement, so it is a reasoning-and-long-context specialist rather than an agentic-coding model; GPT-5.4 and 5.5 superseded it within three months.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **SWE-bench Verified — 80.0% (OpenAI) vs 69.0% (swebench.com, effort null) vs 71.8% (swebench.com, high effort).** An 11-point spread; the official leaderboard's runs are used and OpenAI's claim is recorded.
2. **FrontierMath — 40.3% / 14.6% (OpenAI, benchmark v1) vs 67.4% / 31.7% (Epoch v2, released 2026-06-12).** Different benchmark versions; the v2 figures are used with the v1 pair kept for traceability.
3. **HLE — 34.5% (no tools) / 45.5% (with search+Python) vs 37.67% (AA).** Tool and format conditions; both are listed.
4. **AA index — 30\* (estimated) vs 30.1 (OpenRouter) vs 30.4 (via BenchLM) vs 59.88/100 (BenchLM's own composite).** The last is a different scale; only AA's number enters the rubric.
5. **Speed — AA says 83.2 t/s**, and the earlier reading of 80.6 is corrected here.
6. **Deprecation labelling — AA points to GPT-5.4; OpenAI's own docs now recommend GPT-6 Astra; Zen's deprecated table lists only "GPT 5.2 Codex | July 23, 2026"** — plain GPT-5.2 is still sold.
7. **Terminal-Bench 2.0 / 4.0, GDPval-AA, SciCode, FrontierCode, ITBench-AA, AA-Briefcase and AutomationBench-AA are all null on AA for this model**, so the tool and coding scores lean on the launch table and the official swebench.com runs.
8. **LMArena: only an unverified HN headline** ("OpenAI falls from #6 to #13") — no arena score is claimed.
9. **System-card PDF not fetched** — the official claims here come from the launch blog.

### Notes on identity

- `gpt-5.2` is a distinct model from `gpt-5.2-codex` (a coding-specialised sibling with the same prices, index 28.50 and 120.7 t/s), `gpt-5.2-chat` (128K context, 32K output) and `gpt-5.2-pro` ($21/$168).
- Effort levels are parameters and **none is the API default** — the launch table used max-effort/xhigh, so an unlabelled GPT-5.2 number from a product surface is likely to be a *non-reasoning* run.
- It is the only model in this dataset with a **400K** context among the OpenAI flagships of its generation — GPT-5.4 onwards moved to 1.05M.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — OpenAI first-party model page, pricing page, the "Introducing GPT-5.2" launch blog and the GPT-5.5 blog's comparison table; independent trackers Artificial Analysis (model page, per-evaluation payload, effort variants, Codex variant), the official swebench.com leaderboard, Vals AI, Epoch AI via the BenchLM ledger, the BenchLM evidence ledger, OpenRouter and OpenCode Zen catalogs, plus Simon Willison's Codex-CLI long-run report and Hacker News coverage. Vendor-vs-independent conflicts — the SWE-bench Verified spread and the two FrontierMath benchmark versions — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.2.md`, using the same headings.
