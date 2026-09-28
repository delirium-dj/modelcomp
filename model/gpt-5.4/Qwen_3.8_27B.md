# GPT-5.4 — findings by Qwen 3.8 27B

- Source: OpenAI (`opencode/gpt-5.4`; vendor API: `gpt-5.4`, Pro variant `gpt-5.4-pro`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's March 2026 flagship for professional work: first mainline model unifying GPT-5.3-Codex coding with native computer use, tool search, and 1M-token context.
- **Provider / access:** OpenAI API (`gpt-5.4`, Chat Completions/Responses), ChatGPT (Plus/Team/Pro — replaces GPT-5.2 Thinking), Codex (1M context experimental). No OpenCode Zen Free ID.
- **Release / knowledge:** Released 2026-03-05 (OpenAI "Introducing GPT-5.4"); knowledge cutoff not publicly documented.
- **IDs:** `opencode/gpt-5.4` (repo registry); vendor `openai/gpt-5.4` + `openai/gpt-5.4-pro`. No Free ID on Zen.
- **Context window:** 1M tokens (922K in / 128K out per designforonline.com; standard 272K window, 2× billing beyond; 1M experimental in Codex). Note: repo `meta.json` still says 128K.
- **Modalities:** Text + high-fidelity image in (up to 10.24M pixels), screenshot-based computer use, PDF/docs; text out. Native tool calls, tool search (on-demand tool definitions), mid-response steerability.
- **Pricing (as of 2026-09-28):** $2.50 input / $15 output per 1M; cached input $0.25/1M; gpt-5.4-pro $30/$180. Batch/Flex at 50% of standard; priority at 2×.
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- GDPval: **83.0% wins-or-ties** (OpenAI official; GPT-5.2 70.9%; 44 occupations, top 9 US GDP industries)
- OSWorld-Verified: **75.0%** (OpenAI official; human baseline 72.4%, GPT-5.2 47.3%)
- WebArena-Verified: **67.3%** (OpenAI official; GPT-5.2 65.4%)
- Online-Mind2Web: **92.8%** (OpenAI official)
- Toolathlon: **54.6%** (OpenAI official; GPT-5.2 45.7%)
- MCP Atlas: **67.2%** (OpenAI official; GPT-5.2 60.6%)
- τ2-bench Telecom (no reasoning): **64.3%** (OpenAI official; GPT-5.2 57.2%)
- BrowseComp: **82.7%** (OpenAI official; Pro 89.3%)
- Terminal-Bench 2.0: **75.1%** (OpenAI official; GPT-5.3-Codex 77.3%)
- Tool search: 47% token reduction on 250 MCP Atlas tasks, 36 servers, same accuracy (OpenAI)

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (OpenAI official, xhigh; GPT-5.2 92.4%, Pro 94.4%)
- HLE (with tools): **52.1%** (OpenAI official; Pro 58.7%)
- ARC-AGI-2 (Verified): **73.3%** (OpenAI official; Pro 83.3%, GPT-5.2 52.9%)
- FrontierMath Tier 1–3 / Tier 4: **47.6% / 27.1%** (OpenAI official)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **68.5/100, #18 of 194** (BenchLM; strongest category Reasoning #14)

Coding:

- SWE-bench Verified: **~80%** (tokenmix.ai 2026 tracking; 2nd behind DeepSeek V4 ~81%)
- SWE-Bench Pro (Public): **57.7%** (OpenAI official; GPT-5.3-Codex 56.8%; #1 per datalearner.com)
- Terminal-Bench 2.0: **75.1%** (OpenAI official)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- MRCR: **86.0% @128K**, 36.6% at 512K–1M range (OpenAI official)
- Graphwalks BFS: **93.0% @0–128K**, 21.4% @256K–1M; Graphwalks parents 32.4% @256K–1M (OpenAI official)

### Normalized scores (1–100)

- **Tool use: 88/100.** OSWorld-Verified 75.0% (above the 72.4% human baseline), GDPval 83% wins/ties, BrowseComp 82.7%, strong Toolathlon/MCP Atlas/τ2; Toolathlon 54.6% and MCP Atlas 67.2% keep it under 90.
- **Reasoning: 90/100.** GPQA Diamond 92.8% (90+ frontier band), HLE-with-tools 52.1% (40+ frontier band), ARC-AGI-2 73.3%; BenchLM ranks Reasoning #14 of 194.
- **Context window: 85/100.** 1M window (≥1M tier) but measured retrieval degrades sharply — MRCR 86%@128K falls to 36.6% at 512K–1M and Graphwalks BFS 21.4% @256K–1M; well short of ≥98%-at-512K+ for 100.
- **Multimodal: 78/100.** High-fidelity image + PDF/document input with MMMU Pro (no tools) 81.2% and OmniDocBench avg error 0.109; no native video/audio input, text out only.
- **Coding: 86/100.** SWE-bench Verified ~80% (frontier 2nd) and SWE-Bench Pro 57.7% (#1), TB2.0 75.1%; below the TB2.1 85%+ frontier reference and behind GPT-5.3-Codex on TB2.0.
- **Cost efficiency: 65/100.** $2.50/$15 with $0.25 cache and 50% Batch/Flex sits just under the $3/$15 ≈ 60 reference; tool search (−47% tokens) improves effective cost.
- **Overall Score: 85/100.** (88 + 90 + 85 + 78 + 86) / 5 = 85.4 → 85; best-fit for computer-use agents and professional knowledge work at frontier quality, with deep coding via the unified Codex lineage.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-28
- Method: public internet research (OpenAI "Introducing GPT-5.4" launch data via digitalapplied.com, BenchLM, tokenmix.ai, llm-stats.com, hokai.io, datalearner.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
