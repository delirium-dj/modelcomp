# Gemini 3.1 Pro — findings by MiMo 2.6 Flash

- Source: Google DeepMind (`gemini-3.1-pro-preview`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google DeepMind's frontier generalist released in preview on 2026-02-19 as the next iteration of Gemini 3 Pro — long-horizon coding, agentic workflows, multimodal understanding, and complex reasoning at a 1M-token context. Not a variant/alias; separate entry from Gemini 3 Pro and 3.5 Pro.
- **Provider / access:** Gemini API / AI Studio (`gemini-3.1-pro-preview`), Vertex AI, Gemini app, Gemini CLI, GitHub Copilot. Chat Completions-compatible and native generateContent routes.
- **Release / knowledge:** released 2026-02-19 (preview status; GA per The AI Rankings); knowledge cutoff not disclosed on the model card.
- **IDs:** `google/gemini-3.1-pro-preview` (gateway routes) / `gemini-3.1-pro-preview` (native).
- **Context window:** 1,000,000 input tokens; max output 64,000 (65,536 listed by some providers).
- **Modalities:** text, image, video, audio, PDF in; text out; reasoning yes (thinking levels low/medium/high); tool calls yes (function calling, code execution, search, Deep Research routes); JSON/structured outputs supported.
- **Pricing (as of 2026-10-07):** $2.00 in / $12.00 out per 1M at ≤200K context; **$4.00 / $18.00 above 200K** up to 1M; context-cache hit $0.50/M. Gemini app free with limits (AI Pro $19.99/mo, Ultra tier above). Paid API.
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 (Terminus-2 harness): **68.5%** (Google model card; GPT-5.3-Codex 77.3%). Terminal-Bench 2.1: no verified public score found.
- GDPval-AA (Elo): **1317** (Google comparison via NxCode — Claude Opus 4.6 leads at 1606).
- MCP Atlas: **69.2%**; BrowseComp (search+python+browse): **85.9%**; APEX-Agents long-horizon professional tasks: **33.5%**.
- τ2-bench: Google ran it (standard sierra framework, airline excluded) but no score captured in retrieved tables — no verified public score found.
- Claw-Eval / Toolathon / OSWorld: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **94.3%** no tools (Google, self-computed; highest reported at release).
- HLE: **44.4%** no tools (full text+MM set), **51.4%** with search + code (Google).
- ARC-AGI-2: **77.1%** (ARC Prize Verified, semi-private set).
- MMMU-Pro: **75.8%**. Multilingual MMLU: strong (per model card) — exact value not captured.
- AA Intelligence Index / LCR / CritPt / Omniscience: no verified public score found.

Coding:

- SWE-bench Verified: **80.6%** (Google, single attempt, 10× runs; +0.6% adjusted for 3 broken harness items).
- SWE-bench Pro (Public): **54.2%** (Google, 5× runs) / ~46.1% on the standardized public leaderboard.
- LiveCodeBench Pro: **2887 Elo** (public leaderboard).
- DeepSWE / SciCode / Vibe Code Bench: no verified public score found for this exact model (SciCode sourced from AA but value not retrieved).

Long context:

- MRCR v2 (8-needle): **84.9%** at 128K average (cumulative) — but **26.3%** pointwise at the full 1M window; competitors mostly unsupported at 1M. Google released the dataset for reproducibility.

### Normalized scores (1–100)

- **Tool use: 76/100.** TB2.0 68.5% leads the Google-run table's Claude column, BrowseComp 85.9% is excellent, but GDPval-AA 1317 only lands just above the mid band (900–1200 → 50–70), APEX-Agents 33.5% is mid, and there is no TB2.1/Tau3/Claw-Eval number — caps it at 76.
- **Reasoning: 90/100.** GPQA 94.3 and HLE 44.4 (no tools) both clear the frontier refs (90%+/40%+), ARC-AGI-2 77.1 is field-leading; not higher because no AA Intelligence Index/LCR row exists for cross-checking and HLE-with-tools 51.4 trails frontier peers.
- **Context window: 90/100.** Window is 1M (≥1M tier), but MRCR retrieval collapses to 26.3% pointwise at the full 1M and is 84.9% at 128K — well short of the ≥98%-at-512K bar for 100, so it sits mid-tier at 90.
- **Multimodal: 93/100.** Text/image/video/audio/PDF in with text out = audio-in band (90–100), corroborated by MMMU-Pro 75.8; no non-text output keeps it below 95.
- **Coding: 88/100.** SWE-bench Verified 80.6% and SWE-bench Pro 54.2% are top-tier but trail GPT-5.3-Codex/Claude leads; TB2.0 68.5% and LiveCodeBench Pro 2887 Elo are strong; capped below 90 by no DeepSWE/SciCode/Vibe rows and second-place positions on the hardest coding boards.
- **Cost efficiency: 70/100.** $2/$12 under 200K is a frontier-bargain (between the $1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors, so ~70); the >200K tier doubling to $4/$18 — exactly where its 1M-context advantage lives — and $0.50 cache hits pull it down.
- **Overall Score: 87/100.** (76+90+90+93+88)/5 = 87.4 → 87 — best-fit cheap frontier generalist for 1M-window multimodal work and science reasoning; weaker on long-window retrieval, expert-task GDPval, and terminal-agent polish.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Google DeepMind model card + evaluation PDF, Gemini API pricing, AISO Tools, NxCode, LLM Stats, The AI Rankings, MyClaw); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
