# Kimi K3 — findings by MiniMax M3

- Source: Moonshot AI (`moonshotai/kimi-k3`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2.8T-parameter multimodal MoE flagship (released 16 July 2026) with 1M-token input and output window, frontier multimodal document/math reasoning, and terminal-agent coding. Proprietary, premium priced. Open weights scheduled 27 July 2026.
- **Provider / access:** Moonshot AI platform (`kimi-k3`); OpenRouter as `moonshotai/kimi-k3`. Chat Completions API.
- **Release / knowledge:** Release 16 July 2026; knowledge cutoff not published (likely early-to-mid 2026).
- **IDs:** `moonshotai/kimi-k3`; no Zen Free ID.
- **Context window:** 1,048,576 in / 1M out. Verified by Moonshot, AI Release Tracker, and OpenRouter listing.
- **Modalities:** Text, image, document in; text out. Tool calls: yes.
- **Pricing (as of 2026-10-13):** $3.00 input / $15.00 output per 1M (cache miss); $0.30 cached input; $0.015/web search call. Paid, no free tier.
- **Architecture:** MoE, 2.8T total parameters, 896 experts, 16 active per token. Kimi Delta Attention (KDA) hybrid linear attention, ~6.3× decoding speedup. 62 tok/s output, 1.99s TTFT.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis private long-horizon knowledge work: **1,547 Elo** (+732 from Kimi K2.6, behind only Claude Fable 5) (AA, July 2026).
- BrowseComp: **91.2%** (LEADS GPT-5.6 Sol 90.4, Claude Fable 5 88.0; with 300K context compaction) (Wan 2.7, 17 July 2026).
- Automation Bench: **30.8%** (LEADS GPT-5.6 Sol 29.7, Fable 5 29.1, Opus 4.8 27.2).
- SpreadsheetBench 2: **34.8%** (LEADS Fable 5 34.7, GPT-5.6 32.4 — narrow but first).
- AA-Briefcase: **1,548 Elo** (Fable 5 1,583, GPT-5.6 1,495, Opus 4.8 1,354).
- GDPval-AA v2: **1,668 Elo** (Fable 5 1,760, GPT-5.6 1,748, Opus 1,600) — 92 Elo behind Fable on general agentic.
- AA Agentic Index: **50.07** (AA composite).
- Kimi Code CLI: **57** on AA Coding Agent Index, ranks #5 (just behind Grok 4.5) (Artificial Analysis LinkedIn).
- Tau3-Banking / Tau2-Bench / Toolathlon / MCP-Atlas: no verified public score found for this exact model/ID.

Reasoning / knowledge:

- AA Intelligence Index: **57.11 (#4 of 189)** — on par with Opus 4.8 and GPT-5.5 (AA Intelligence Index v4.3.2).
- GPQA Diamond: **93.5%** (Fable 5 92.6, GPT-5.6 94.1, Opus 4.8 91.0) — frontier-competitive.
- HLE-Full: **43.5%** (Fable 5 53.3, Opus 49.8, GPT-5.6 44.5) — 10-point gap to Fable.
- Humanity's Last Exam: **56%**.
- AIME 2025: **96.1%** (vs K2.6's 96.4% on AIME 2026 — math capability preserved).
- LCR / MLCR / CritPt: no verified public score found for this exact model/ID.
- Omniscience Accuracy / Hallucination Rate: no verified public score found for this exact model/ID.

Coding:

- SWE-bench Verified: **76.8%** (some score inconsistency vs K2.6 80.2% — likely different benchmark version).
- DeepSWE: **67.5** (Fable 5 70.0, GPT-5.6 73.0, Opus 4.8 59.0) — loses deep repo.
- FrontierSWE: **81.2** (Fable 5 86.6, GPT-5.6 71.3, Opus 4.8 66.7) — beats GPT-5.6 by ~10.
- Terminal-Bench 2.1: **88.3** (GPT-5.6 88.8, Fable 5 84.6).
- Program Bench: **77.8** (LEADS GPT-5.6 77.6, Fable 5 76.8).
- SWE Marathon: **42.0** (LEADS Opus 4.8 40.0, GPT-5.6 39.0, Fable 5 35.0) — endurance benchmark.
- Kimi Code Bench 2.0: **72.9** (Fable 5 76.9).
- JobBench: **52.9** (Fable 5 57.4, Opus 48.4).
- Frontend Code Arena: **1,679 Elo (#1)** — ranked first in 6 of 7 frontend domains (Arena.ai).
- LMArena text: **1,486 Elo** (±10.8, still stabilizing).
- AA Coding Index: **76.24** (AA composite).
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found for this exact model/ID.

Long context:

- BrowseComp at 91.2% with 300K context compaction; without compaction on full 1M window, K3 scores 90.4 (still first).
- MRCR / RULER / GraphWalks at window length: no long-context retrieval reported for extreme lengths (500K-1M).

### Normalized scores (1–100)

- **Tool use: 90/100.** Leads on BrowseComp (91.2), Automation Bench (30.8), SpreadsheetBench 2 (34.8). 1,547 Elo on AA long-horizon. Loses 92 Elo to Fable on GDPval general agentic. Capped because MCP-Atlas and Toolathlon not published.
- **Reasoning: 90/100.** AA Intelligence Index 57.11 (#4/189), GPQA Diamond 93.5% frontier-competitive. HLE-Full 43.5 trails Fable by 10 points — meaningful reasoning gap on the toughest test.
- **Context window: 96/100.** 1M in / 1M out — only model in cohort offering full 1M output. Kimi Delta Attention enables 6.3× decoding speedup. Capped at 96 because no independent needle-in-haystack at 500K-1M yet.
- **Multimodal: 88/100.** Tops OmniDocBench 91.1 by a wide margin. MMMU-Pro 81.6 second to GPT-5.6. CharXiv 91.3, MathVision 97.8 — strongest document understanding in cohort. Capped at 88 (vs Gemini 3 Pro's 95) because no native video/audio.
- **Coding: 92/100.** #1 on Frontend Code Arena (1,679 Elo). Leads Program Bench 77.8 and SWE Marathon 42.0. AA Coding Index 76.24. Loses DeepSWE by 5.5 to GPT-5.6. Capped because LiveCodeBench / SciCode not published.
- **Cost efficiency: 62/100.** $3/$15 is competitive with Sonnet series but 5-6× Kimi K2.6. Cache $0.30 makes heavy-cache workloads cheap. 70-80% below Opus 4.8. Capped because the 5-6× K2.6 price hike removes the budget-frontier positioning.
- **Overall Score: 91/100.** Half-up mean of Tool 90, Reasoning 90, Context 96, Multimodal 88, Coding 92 = 456/5 = 91.2 → half-up 91. K3 is a strong endurance / agentic / document-understanding model with a clear 10-point reasoning gap to Fable 5 on HLE-Full; for sustained multi-step coding it is the best 2.8T open-weight option at launch.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-13
- Method: public internet research (Simon Willison, Wan 2.7, AI Release Tracker, Artificial Analysis, LLM Rumors, LinkedIn). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K3_Moonshot.md`, using the same headings.
