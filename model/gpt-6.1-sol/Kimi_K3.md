# GPT-6.1 Sol — findings by Kimi K3

- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's mid-tier GPT-6 reasoning model, launched at DevDay 2026 as a direct replacement for GPT-6 Sol, positioned just below the GPT-6 Astra flagship. Pitch: near-Astra agentic coding and computer use at roughly one-fifth the task cost.
- **Provider / access:** OpenAI API (`gpt-6.1-sol`) — Responses, Chat Completions (no tool calling there) and Batch endpoints; also OpenRouter `openai/gpt-6.1-sol`, Codex CLI default (0.159.1), GitHub Copilot, ChatGPT Work. No Free ID (paid only).
- **Release / knowledge:** Released 2026-09-29 (one week after GPT-6 Sol, which it replaced after 7 days per Artificial Analysis); knowledge cutoff 2026-04-30.
- **IDs:** `openai/gpt-6.1-sol`, `gpt-6.1-sol` (no Free ID on Zen).
- **Context window:** 1,050,000 tokens total; max input 922,000; max output 128,000 (OpenAI model reference page, checked 2026-09-30).
- **Modalities:** Text + image in, text out; no audio or video. Reasoning yes — effort levels low/medium (default)/high/xhigh/max (`none` removed vs GPT-6 Sol). Built-in tools: web search, file search, image generation, code interpreter, hosted shell, apply_patch, skills, computer use, MCP, tool search.
- **Pricing (as of 2026-09-30):** $2.00/M in, $0.10/M cached in, $2.50/M cache write, $10.00/M out. Requests over 272K input tokens billed at 2x input / 1.5x output ($4/$15). Batch & Flex 50% off; Fast mode 2x; Ultrafast announced, 6x standard price, "coming days".
- **Architecture:** Proprietary (weights not released; parameter counts undisclosed).

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.0 offline (computer use): **71.4%** (max effort; OpenAI chart, figures via Vellum — GPT-6 Astra 73.5%, GPT-6 Sol 64.4%, Opus 5.5 60.3%)
- AutomationBench 1.0.6 (business workflows): **35.4%** (medium effort; OpenAI claim via Vellum/DataCamp — Opus 5.5 ~33.2%, Sonnet 5.5 44.7%, GPT-6 Sol ~30.6%)
- GDPval-AA v2.1: **+5 points** vs GPT-6 Sol (Artificial Analysis; absolute value not published in summary) — base value: no verified public score found
- Terminal-Bench Science 0.1: **>2x GPT-6 Sol's score** (OpenAI via The Decoder; GPT-6 Astra 68.1% max baseline; $5.47/task for 6.1 Sol)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **52** (max effort) / **51** (xhigh) — GPT-6 Astra 53, GPT-6 Sol 48, Opus 5.5 ~58, Sonnet 5.5 ~56 (Artificial Analysis, independent)
- Factual error rate (low effort): **7.7%** vs GPT-6 Sol 11.4% (OpenAI via TechCrunch)
- AA-Omniscience hallucination rate: **54%** (down from GPT-6 Sol's 60%) (Artificial Analysis)
- GPQA Diamond / HLE / LCR / CritPt: no verified public score found for this exact ID

Coding:

- DeepSWE v1.1 (real-repo coding): **75.2%** (high effort; OpenAI/OpenAI Devs chart via Vellum — GPT-6 Astra 74.8% high, GPT-6 Sol 68.8% max, Sonnet 5.5 71.0%); ~$1.50/task vs ~$7.70 Astra (Vellum estimate)
- Terminal-Bench 4.0: **+12 points** vs GPT-6 Sol (Artificial Analysis; absolute value: no verified public score found)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found for this exact ID

Long context:

- 1.05M-token window documented, but no MRCR / RULER / GraphWalks retrieval numbers published for this ID — no long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong in-house tool layer (computer use 71.4% OSWorld, hosted shell, MCP) and best-in-class cost/task; capped because Sonnet 5.5 beats it on AutomationBench (44.7% vs 35.4%) and it trails Astra on computer use.
- **Reasoning: 83/100.** AA Intelligence Index 52, four points above its predecessor and one below Astra, but behind Opus 5.5 (58) and Sonnet 5.5 (56); no GPQA/HLE verified for this exact ID caps confidence.
- **Context window: 86/100.** 1.05M window with 128K output is top-tier on paper; capped because whole-request 2x billing above 272K input punishes deep-context use and no independent long-context retrieval scores exist yet.
- **Multimodal: 45/100.** Text + image input, text output only — no audio, no video, no image input on the undocumented side; clearly above text-only (15) but well below full-multimodal models.
- **Coding: 88/100.** DeepSWE v1.1 75.2% statistically ties the Astra flagship at 1/5 the task cost; +12 on Terminal-Bench 4.0 vs predecessor; capped by missing independent SWE-bench Verified / LiveCodeBench numbers for this exact ID.
- **Cost efficiency: 78/100.** $2/$10 per 1M with $0.10 cached input; AA measures $0.72 per index task vs $3.26 for Astra; excellent value, though 10–30% more output tokens than GPT-6 Sol per task blunts the saving.
- **Overall Score: 77/100.** Half-up mean of (84+83+86+45+88)/5 = 77.2 → 77. Best fit: high-volume agentic coding and computer-use loops where cost per completed task matters more than top-of-index quality.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-01
- Method: public internet research (OpenAI docs, OpenRouter, Artificial Analysis, codersera.com, datacamp.com, TechCrunch, Vellum); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
