# MiniMax M3 — findings by GLM 5.3 Flash

- Source: MiniMax (`MiniMax-M3`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3 (open-weight flagship; no Free-tier wording)
- **Short description:** MiniMax's coding/agentic flagship built on MiniMax Sparse Attention (MSA) with 1M context and native multimodal training from step zero — the first open-weight model combining frontier coding, million-token context and native multimodality. Runs autonomous multi-hour engineering tasks (12-h ICLR paper replication, 9.4x CUDA kernel speedup).
- **Provider / access:** MiniMax API `https://api.minimax.io/v1/text/chatcompletion_v2` (model `MiniMax-M3`, Chat Completions-style v2), MiniMax Code harness, Token Plan, and OpenRouter. Weights on Hugging Face (`MiniMaxAI/MiniMax-M3`). Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Released June 1, 2026 (technical report "MiniMax M3: Frontier Coding, 1M Context, Native Multimodality"; MSA paper arXiv:2606.13392, June 11–12, 2026). Knowledge cutoff January 2026 (served system prompt).
- **IDs:** `MiniMax-M3` (API), `minimax-m3` / `minimaxai/minimax-m3` (OpenRouter/HF).
- **Context window:** 1,000,000 tokens with a guaranteed minimum of 512K (vendor); max output 131,072. MSA reduces per-token attention compute 28.4x at 1M context (14.2x prefill / 7.6x decode wall-clock on H800).
- **Modalities:** Natively multimodal: text, image, video in; text out (interleaved multimodal training, ~100T data). Thinking modes enabled/disabled/adaptive; tool calls, JSON mode, structured outputs supported.
- **Pricing (as of 2026-09-19):** $0.30 in / $1.20 out per 1M; cache reads $0.06 (MiniMax and OpenRouter routes, same price). Token Plan bundles M3 at unchanged plan pricing. No free tier.
- **Architecture:** Open weights (MiniMax Community License, commercial use conditional; code MIT). HF checkpoint: ~427B total parameters (BF16 safetensors); active-parameter count not disclosed in reviewed sources (folder meta carries ~230B/9.8B — flagged as unverified). Blockwise sparse attention (MSA) over GQA with per-group Top-k block selection.

### Raw benchmarks found

Agent / tool use:

Agent / tool use:

- Terminal-Bench 2.1: **66.0%** (MiniMax-reported, June 1, 2026; also logged as TB 2.0 66.0% by LLM-Stats aggregator)
- MCP-Atlas: **74.2%** (MiniMax-reported public set)
- PostTrainBench: **37.1**, #3 overall — behind Opus 4.7 (42.4) and GPT-5.5 (39.3) (vendor)
- BrowseComp: **83.5** (vendor; above Opus 4.7's 79.3)
- GDPval-AA / Tau2 / Tau3 / Claw-Eval: no verified public score found
- Long-run cases (vendor demos, not benchmarks): ~12 h autonomous ICLR-paper replication (18 commits, 23 figures); ~24 h CUDA FP8 GEMM optimization, 147 submissions, 1,959 tool calls, 7.6%→71.3% Hopper utilization (9.4x speedup)

Reasoning / knowledge:

- GPQA Diamond: **92%** accuracy (LLM-Stats aggregator observation, 2026-06-07)
- HLE: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found (AA lists no itemized K3-style breakdown for M3 in reviewed sources)
- MMMU-Pro: **78.1** (LLM-Stats observation)
- GeneBench-Pro: **0.9** xhigh (observed 2026-06-30)
- BenchLM composite: **61.3/100, #54 of 230** (strongest category Multimodal & Grounded #34)

Coding:

- SWE-bench Verified: **80.5%** (rank 8/49, LLM-Stats observation 2026-06-07)
- SWE-bench Pro: **59.0%** (MiniMax-reported; rank 14/46 — Fable 5 at 80.3, Opus 5 79.2, Qwen3.8-Max 67.7 on the same ladder)
- Terminal-Bench 2.1 (coding harness): **66.0%** (MiniMax-reported)
- DeepSWE / LiveCodeBench / SciCode / Vibe Code Bench / SWE-Atlas: no verified public score found

Long context:

- 1M window (512K guaranteed floor), MSA native; no MRCR/RULER retrieval number verified in reviewed sources

### Normalized scores (1–100)

- **Tool use: 74/100.** TB2.1 66% is above the mid band (45–60%) and MCP-Atlas 74.2%/BrowseComp 83.5% are strong, but missing GDPval/Tau corroboration and the June-vintage vendor-only harness keep it clear of the frontier 90s.
- **Reasoning: 80/100.** GPQA 92% is frontier-band, but with no HLE, no AA Intelligence Index and only an aggregator-observed evidence base, the score rests on a single verified column.
- **Context window: 92/100.** 1M window (95–100 tier) docked for the 512K guaranteed floor and zero verified retrieval numbers at depth.
- **Multimodal: 82/100.** Native text+image+video in / text out with joint training from step zero and MMMU-Pro 78.1 — mid 75–90 video band; no audio in, text-only out.
- **Coding: 84/100.** SWE-bench Verified 80.5% (#8/49) is genuinely strong; SWE-Pro 59.0% (#14/46), TB2.1 66% and no DeepSWE/SciCode corroboration hold it below the Kimi-K3/Fable band.
- **Cost efficiency: 90/100.** $0.30/$1.20 per 1M is the same price point M2.7 was scored at (90); cache reads at $0.06 make long-context agent loops cheap. No free tier.
- **Overall Score: 82.4/100.** (74+80+92+82+84)/5 = 82.4. Best fit: budget-friendly open-weights pick for long-context agentic coding and multimodal document/video understanding when frontier APIs are overkill.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-09-19
- Method: public internet research (fresh web search: MiniMax M3 product pages, LLMReference dossier, Hugging Face model card, MSA arXiv paper, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.


