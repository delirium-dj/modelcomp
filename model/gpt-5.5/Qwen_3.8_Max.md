# GPT-5.5 — findings by Qwen 3.8 Max

- Source: OpenAI (`gpt-5.5`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 (development codename **"Spud"**)
- **Short description:** OpenAI's April-2026 flagship and the **first fully retrained base model since GPT-4.5** (the 5.1–5.4 releases were incremental refinements on one base). Natively omnimodal — text, images, audio and video processed end-to-end in a single unified system — and the first OpenAI API model with a 1M-token context window (4x GPT-5.4's 256K). Explicitly positioned as an **agent** that takes a sequence of actions, uses tools, checks its own work and continues until a task finishes, rather than a turn-by-turn assistant. It topped the independent Artificial Analysis Intelligence Index at launch.
- **Provider / access:** ChatGPT (Plus / Pro / Business / Enterprise) and Codex; API in the Responses and Chat Completions endpoints (rolled out shortly after launch). Three variants: **GPT-5.5** (general), **GPT-5.5 Thinking** (extended chain-of-thought), **GPT-5.5 Pro** (highest accuracy, Pro/Business/Enterprise).
- **Release / knowledge:** Released 2026-04-23 (API/OpenRouter listing 2026-04-24); knowledge cutoff **December 2025**. Shipped ~6 weeks after GPT-5.4.
- **IDs:** `openai/gpt-5.5` (variants `gpt-5.5-thinking`, `gpt-5.5-pro`).
- **Context window:** 1,000,000 tokens (1.1M per OpenRouter) in the API; **400,000 tokens in Codex**.
- **Modalities:** text + image + audio + video in → text out (natively omnimodal, a scaled continuation of the GPT-4o approach); reasoning yes (Thinking variant / effort levels incl. xhigh); tool calls yes (built for multi-step agentic tool use and self-checking).
- **Pricing (as of 2026-10-21):** $5 input / $30 output per 1M tokens — **double** GPT-5.4's $2.50/$15 (OpenAI's largest single-release price increase). **GPT-5.5 Pro: $30 / $180.** OpenAI notes it is more token-efficient than GPT-5.4, partly offsetting the higher rate.
- **Architecture:** Undisclosed proprietary; natively omnimodal unified model, new training run (not an incremental 5.x refinement).

### Raw benchmarks found

Agent / tool use (OpenAI vendor-run + independent AA):

- Terminal-Bench 2.0: **82.7%** (2.1: **78.2%**) — leads its tables (Gemini 3.5 Flash 76.2%, Opus 4.7 66.1–69.4%)
- OSWorld-Verified (GUI computer use): **78.7%** — leads (Opus 4.7 78.0%, Gemini 3.5 Flash 78.4%)
- GDPval: **84.9%**; GDPval-AA Elo **1769** — leads (Opus 4.7 1753, Gemini 3.5 Flash 1656)
- Tau2-bench Telecom: **98.0%** without prompt tuning
- MCP Atlas: **75.3%** — a relative **weak spot** (trails Opus 4.7 79.1%, Gemini 3.1 Pro 78.2%); Toolathlon 55.6%, Finance Agent v2 51.8% (below Gemini 3.5 Flash 57.9%)

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index (independent): 60.2 (xhigh)** — **#1 of 147**, ~3 points ahead of Claude Opus 4.7 (57.3) and Gemini 3.1 Pro Preview (57.2); OpenAI claims SOTA across 14 benchmarks
- GPQA Diamond: **93.6%** — frontier cluster, a touch below Gemini 3.1 Pro (94.3%) and Opus 4.7 (94.2%)
- ARC-AGI-2: **84.6–85.0%** — leads (Opus 4.7 75.8%, Gemini 3.1 Pro 77.1%, Gemini 3.5 Flash 72.1%)
- FrontierMath: **51.7%** (T1–3) / **35.4%** (T4); CyberGym **81.8%**; GeneBench 25.0%; BixBench 80.5%
- Humanity's Last Exam (no tools): **41.4%** — **trails** Opus 4.7 (46.9%) and Gemini 3.1 Pro (44.4%); pure knowledge/academic recall is the gap that has not fully closed

Coding:

- Expert-SWE: **73.1%** (up from 68.5% prior gen)
- SWE-Bench Pro: **58.6%** — **trails Claude Opus 4.7 (64.3%)**; ahead of Gemini 3.1 Pro (54.2%) and Gemini 3.5 Flash (55.1%)
- Terminal-Bench 2.0 82.7% (above) is the coding headline; strong agentic/terminal work, behind Anthropic on the hardest repository engineering

Multimodal:

- MMMU-Pro: **83.2%** with tools / **81.2%** no tools; CharXiv Reasoning (no tools): **84.1%**; Blueprint-Bench 2 (normalized): **36.2%** — leads (Gemini 3.5 Flash 33.6%)
- Native text+image+audio+video understanding in one model

Long context:

- MRCR v2 (8-needle, 128k): **94.8%** — best-in-class by a wide margin (Gemini 3.1 Pro 84.9%, Gemini 3.5 Flash 77.3%, Opus 4.7 59.3%)
- MRCR v2 (512K–1M): **74.0%** — leads (GPT-5.4 36.6%, Opus 4.7 32.2%); 1M window (400K in Codex)

> Provenance: benchmark figures combine **OpenAI's vendor-run launch table** (via Vellum and DataNorth, "SOTA across 14 benchmarks") with **independent** Artificial Analysis measurements (Intelligence Index 60.2 xhigh = #1/147; ~65 tok/s at xhigh; ~75M output tokens for the full Index; ~$3,357 eval cost). The April-2026 picture is explicitly non-dominated: GPT-5.5 leads agentic/tool-use and long-context retrieval, Claude Opus 4.7 leads SWE-Bench Pro, MCP Atlas, HLE (no tools) and Finance Agent v1.1, and Gemini 3.1 Pro leads abstract reasoning (ARC-AGI-1) and edges GPQA Diamond. HLE (41.4) and MCP Atlas (75.3) are GPT-5.5's documented relative weaknesses; the $5/$30 rate is a premium (2x GPT-5.4).

### Normalized scores (1–100)

- **Tool use: 89/100.** Leads OSWorld-Verified (78.7%), Terminal-Bench 2.0 (82.7%), GDPval-AA Elo (1769) and Tau2-Telecom (98.0%) and is built ground-up for autonomous multi-step tool use; held below the low-90s because MCP Atlas (75.3%) trails Opus 4.7 / Gemini 3.1 Pro and Finance Agent v2 / Toolathlon are mid-pack.
- **Reasoning: 90/100.** The **#1 independent AA Intelligence Index (60.2)** plus leading ARC-AGI-2 (84.6–85.0%), strong FrontierMath (51.7/35.4) and near-frontier GPQA (93.6%); capped because HLE no-tools (41.4%) trails Opus 4.7 and Gemini 3.1 Pro — pure knowledge recall remains the gap — and the Pro variant reasons harder still.
- **Context window: 93/100.** A genuine 1M-token API window (first for OpenAI, 4x GPT-5.4) with **best-in-class retrieval** — MRCR v2 94.8% at 128k and 74.0% at 512K–1M, far ahead of every rival; discounted only by the 400K Codex cap.
- **Multimodal: 90/100.** Natively omnimodal (text/image/audio/video in one unified model) with leading Blueprint-Bench 2 (36.2%) and strong MMMU-Pro (83.2% w/tools) and CharXiv (84.1%); a true multimodal frontier model, held just below the mid-90s as vision is not its single dominant axis.
- **Coding: 89/100.** Terminal-Bench 2.0 82.7% leads and Expert-SWE improved to 73.1%, with CyberGym 81.8% and strong agentic/terminal execution; held below 90 because SWE-Bench Pro (58.6%) trails Claude Opus 4.7 (64.3%) on the hardest multi-language repository engineering.
- **Cost efficiency: 50/100.** Premium — $5/$30 is double GPT-5.4 (OpenAI's biggest single-release hike) and GPT-5.5 Pro is $30/$180, with an AA full-Index eval cost of ~$3,357; OpenAI's claimed token-efficiency gains only partly offset the rate, so it is a poor fit for cost-constrained workloads despite the capability.
- **Overall Score: 90/100.** Mean of Tool 89 + Reasoning 90 + Context 93 + Multimodal 90 + Coding 89 = 90.2 → 90. Best fit: autonomous, long-horizon agentic work — multi-step tool use, GUI/computer-use automation, telecom/enterprise task completion and 1M-token long-context retrieval — where the #1 independent Intelligence Index and native omnimodality justify the premium; the hardest repository engineering and pure knowledge recall still favor Claude Opus 4.7, and budget-sensitive work should weigh the 2x price jump (or GPT-5.5 Pro at $30/$180 for maximum accuracy).

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-21
- Method: public internet research (OpenAI's vendor-run launch table via Vellum and DataNorth; independent Artificial Analysis Intelligence Index 60.2 = #1/147 and speed/verbosity/cost; cross-checked against Appwrite's Gemini 3.5 Flash comparison table, OpenRouter and ofox.ai for pricing/context); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
