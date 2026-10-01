# GPT-5.2 — findings by GLM 5.3

- Source: OpenAI (`openai/gpt-5.2`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's December-2025 frontier reasoning/thinking model — the generalist whose coding capabilities GPT-5.3-Codex then GPT-5.4 built upon. Replaced in ChatGPT by GPT-5.4 Thinking from 2026-03-05 (legacy retirement 2026-06-05); still served on the API and Zen. Sibling of GPT-5.2-Codex and GPT-5.2 Pro.
- **Provider / access:** OpenAI Responses + Chat Completions APIs (`https://api.openai.com/v1`); Codex. On OpenCode Zen via `https://opencode.ai/zen/v1/responses` (`opencode/gpt-5.2`).
- **Release / knowledge:** released December 2025 (before GPT-5.3-Codex, 2026-02-05). Knowledge cutoff not published.
- **IDs:** `gpt-5.2`; Zen `opencode/gpt-5.2`. No Free ID on Zen.
- **Context window:** 400K tokens (BenchLM model details; standard 272K API window with 400K served per family tiering).
- **Modalities:** text and image input, text output; reasoning (xhigh in official evals; "Thinking" in ChatGPT); tool calls.
- **Pricing (as of 2026-10-01):** $1.75 / $14.00 per MTok in/out (official 5.4-announcement pricing table and Zen; Zen cached read $0.175). No free tier.
- **Architecture:** proprietary, size undisclosed; cyber safeguards introduced with this generation (December 2025) and tightened on later models.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **62.2%** (official, GPT-5.4 announcement comparisons)
- BrowseComp: **65.8%** (official)
- OSWorld-Verified: **47.3%** (official — far below the 5.4's 75.0%)
- τ2-bench (Telecom): **98.7%** with original prompts (official); **84.8%** (AA via BenchLM)
- MCP Atlas: **60.6%**; Toolathlon: **45.7%** (official)
- GDPval (wins or ties): **70.9%** (official)
- Gert Labs: **46.54%**; JobBench: **34.3%** (via BenchLM)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (Qwen comparison table; AA: 90.3%)
- HLE: **34.5%** (official); AA-HLE: **37.7%**
- ARC-AGI-1: **86.2%**; ARC-AGI-2: **52.9%** (official)
- AIME 2025: **99.0%** (AA leaderboard)
- FrontierMath v2: **40.700%** (Tiers 1-3), **18.800%** (Tier 4) (Epoch AI)
- CritPt: **11.6%**; AA Intelligence Index: **30.4%**; AA-LCR: **82.7%**; AA-IFBench: **75.4%** (AA via BenchLM)
- Omniscience: accuracy **44.3%**, hallucination rate **81.2%**, index **-0.9%** (AA via BenchLM)
- BenchLM composite: **61.92/100, #47 of 645** (27 of 618 benchmarks covered)

Coding:

- SWE-bench Verified: **80%** (official, GPT-5.2 announcement)
- SWE-Bench Pro (public): **55.6%** (official)
- Vibe Code Bench (Vals): **53.50%**
- SWE-Lancer IC Diamond: **74.6%** (official, via 5.3-Codex announcement comparisons)

Long context:

- OpenAI MRCR v2 8-needle: 4K-8K **98.2%**, 8K-16K **89.3%**, 16K-32K **95.3%**, 32K-64K **92.0%**, 64K-128K **85.6%**, 128K-256K **77.0%** (official)
- GraphWalks BFS 0K-128K: **94.0%**; parents 0-128K accuracy: **89.0%** (official)

### Normalized scores (1–100)

- **Tool use: 70/100.** τ2-bench 98.7% (original prompts) and GDPval 70.9% are strong, but Terminal-Bench 2.0 62.2%, OSWorld 47.3%, MCP Atlas 60.6%, and Toolathlon 45.7% sit mid-band; BrowseComp 65.8% is respectable. Capped by weak computer use relative to the 5.4 generation.
- **Reasoning: 70/100.** GPQA 92.4% and AIME 99.0% are frontier-class, ARC-AGI-2 52.9% decent, but HLE 34.5-37.7% misses the 40% bar and CritPt 11.6% plus an 81.2% hallucination rate drag the profile. Capped by honesty and critique weakness.
- **Context window: 74/100.** 400K nominal with well-measured retrieval: MRCR 8-needle holds 77.0% out to 256K — solid for its generation. Capped by no verified rows beyond 256K.
- **Multimodal: 70/100.** Text + image in with strong vision scores: MMMU-Pro 79.5%, MathVision 83.0%, CharXiv 82.1%, V* 75.9%. Top of the image-in band; no video/audio input or non-text output.
- **Coding: 78/100.** SWE-bench Verified 80% (official) and SWE-Pro 55.6% were strong for late 2025, with SWE-Lancer IC 74.6% and Vibe 53.5% rounding it out; Terminal-Bench 62.2% trails the Codex specialists. Capped by the generation gap to 5.3-Codex/5.4.
- **Cost efficiency: 63/100.** $1.75/$14.00 per MTok (Zen cached $0.175) — same value bracket as GPT-5.3-Codex; the 5.4 line is both smarter and more token-efficient at similar prices.
- **Overall Score: 72/100.** Half-up mean of the five quality dims: (70 + 70 + 74 + 70 + 78) / 5 = 72.4 → 72. A solid, well-measured generalist of the December-2025 generation — now clearly behind GPT-5.4+ for tool-heavy and coding work at the same price.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-01
- Method: public internet research (OpenAI official GPT-5.4/5.3-Codex announcement eval tables, GPT-5.2 announcement rows via BenchLM, AA/Epoch/Vals aggregator rows with sources, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
