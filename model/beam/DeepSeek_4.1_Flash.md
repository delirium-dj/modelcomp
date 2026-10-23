# Beam — findings by DeepSeek 4.1 Flash

- Source: Reflection AI (`Beam-501B-A23B`, hosted as `opencode/beam`)
- Date: 2026-10-18 (UTC); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM has **no page** for `beam` (404); no new independent benchmark surfaced and the prior deep-pass rows stand. **No score change.**

## Model card

- **Name:** Beam
- **Short description:** Reflection AI's first open-weight model (announced 2026-10-05), a 501B-parameter sparse MoE with 23B active per token, built for coding, reasoning and agentic workloads. Its pitch is intelligence-per-token: it claims GLM 5.2-level reasoning at 3–4× less inference compute, while trailing Kimi K3 / DeepSeek V4.1 Flash on the hardest agentic coding tasks.
- **Provider / access:** Reflection API (`Beam-501B-A23B`, `https://api.reflection.ai/openai/v1`, Chat Completions only); open weights on Hugging Face (`reflection/Beam-1.0-501B-A23B`, BF16/FP8/NVFP4); free limited-time OpenCode Zen / Command Code route `opencode/beam`. Reasoning effort `low/medium/high/xhigh/max`.
- **Release / knowledge:** preview 2026-10-05; weights + "Beam is now available" 2026-10-16. Knowledge cutoff not published.
- **IDs:** `opencode/beam`, `Beam-501B-A23B`, `reflection/Beam-1.0-501B-A23B`.
- **Context window:** 1M native (midtraining), but the beta API caps requests at 262,144 tokens (input+output) with 131,072 max output; RL rollouts ran at 256K. Scaffold `meta.json` "1M native (256K served)" matches this.
- **Modalities:** text-only in/out (no image/audio); reasoning effort dial (cannot be disabled); tool calls; JSON mode.
- **Pricing (as of 2026-10-18):** Free limited-time OpenCode Zen / Command Code tier ($0 in/out/cached, inputs may train the model); Apache 2.0 weights self-host free; no official Reflection rate card — Artificial Analysis provider median ~$0.70 / $2.10 per 1M.
- **Architecture:** 501B-parameter sparse MoE, 23B active per token, 52 layers, interleaved local + global attention, weighted to code/STEM, Apache 2.0. Pre-trained on 23.8T curated tokens (<4 weeks on 6,144 NVIDIA GB300 GPUs); RL run >100M rollouts on 10.5K GB300s across ~1.3B sandboxes.

### Raw benchmarks found

> Vendor (Reflection) and BenchLM (HF model card) figures differ by 1–2 points on several rows — both listed.

Agent / tool use:

- Terminal-Bench 2.1: **80.1%** (Reflection / BenchLM)
- MCP-Atlas: **78.7%** (Reflection) — **80.8%** (BenchLM/HF model card)
- BrowseComp (with context management): **77.4%** (Reflection) — **76.8%** (BenchLM)
- DeepSearchQA (with context management): **80.1%** (Reflection) — **80.5%** (BenchLM)
- Tau2/Tau3-Bench (τ³ banking): **38.0%** (Reflection) — τ³-bench **36.1%** (BenchLM)
- AutomationBench (public): **37.0%** (Reflection); GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.5%** (Reflection) — **90.6%** (BenchLM)
- HLE: **36.2%** no tools / **51.1%** with tools (Reflection / BenchLM); vendor table lists 36.2 no-tools
- AA-LCR: **79.3%** (Reflection) — **78.2%** (BenchLM)
- CritPt: **16.3%** (BenchLM/vendor) / 15.6 (vendor table); LongBench v2 **65.5%** (Reflection) — **67.5%** (BenchLM)
- AIME 2026: **97.8%** (Reflection) — **97.7%** (BenchLM); IFBench **79.7%** — **79.6%**
- Artificial Analysis Intelligence Index: not computed on BenchLM (unranked, 20 rows)

Coding:

- SWE-bench Verified: **80.9%** (Reflection) — **81.6%** (BenchLM/HF model card)
- SWE-bench Pro: **65.5%** v1 / **77.2%** v2-Hard (Reflection) — **66.1%** (BenchLM)
- DeepSWE (v1.1): **44.4%** (Reflection) — **43.3%** (BenchLM)
- SWE-bench Multilingual: **78.0%** (Reflection) — **78.3%** (BenchLM)
- SciCode: **49.7%** (Reflection) — **49.2%** (BenchLM); SWE-Atlas Codebase QnA **34.6%** (Reflection) — **31.8%** (BenchLM)

Long context:

- AA-LCR 79.3% and LongBench v2 65.5% at 1M-native / 256K-served context.

### Normalized scores (1–100)

- **Tool use: 85/100.** MCP-Atlas 80.8%, Terminal-Bench 2.1 80.1% and strong search scores (BrowseComp 77.4%, DeepSearchQA 80.1%) are top-tier; capped by weak τ³ banking 38% and AutomationBench 37%.
- **Reasoning: 85/100.** GPQA Diamond 90.5%, HLE-with-tools 51.1% and AA-LCR 79.3% are strong, but CritPt 16.3% and LongBench v2 65.5% keep it below the top reasoning tier.
- **Context window: 82/100.** 1M native but served at 256K (131K out) at beta — lands mid-band between the 256K and 1M tiers.
- **Multimodal: 15/100.** Text-only in/out.
- **Coding: 80/100.** SWE-bench Verified ~81% is excellent, but DeepSWE 44.4% and SWE-Atlas QnA 34.6% lag the frontier (DeepSWE 74%+ ref) and hold the score near the 80 anchor.
- **Cost efficiency: 100/100.** Evaluated on the free OpenCode Zen / Command Code tier ($0), with Apache 2.0 self-hosting as the durable alternative (AA provider median ~$0.70/$2.10).
- **Overall Score: 69/100.** (85 + 85 + 82 + 15 + 80) / 5 = 69.4 → 69. Best fit: efficiency-minded enterprise coding/agent work and free-tier daily driving; escalate to Kimi K3 / DeepSeek V4.1 Flash for the hardest agentic-coding tasks.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research (Reflection AI launch/model card, Hugging Face, BenchLM, DataCamp, TechCrunch, unite.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
