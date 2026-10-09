# Qwen 3.6 Plus — findings by GLM 5.3 Flash

- Source: Alibaba Qwen (`qwen3.6-plus`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** The Plus-tier Qwen3.6 API model from Alibaba (Apr 2026) — a closed reasoning model with a 1M context window, text/image/video/PDF input, and above-average intelligence at a very competitive price. Deprecated by Qwen3.7 Plus.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.6-plus` via `https://opencode.ai/zen/v1/messages` (Anthropic-compatible Messages API, paid); Alibaba Cloud/Qwen API (AA-tracked provider), OpenRouter `qwen/qwen3.6-plus`, Together AI `together_ai/Qwen/Qwen3.6-Plus`, Fireworks.
- **Release / knowledge:** Released 2026-04-02 (CloudPrice + AA); knowledge cutoff: no verified public data found.
- **IDs:** `opencode/qwen-3.6-plus` (Zen); `qwen3.6-plus` / `qwen3.6-plus-2026-04-02` (Alibaba); `qwen/qwen3.6-plus` (OpenRouter)
- **Context window:** 1,000,000 tokens (1M) total, max output 65,536 (64K) — verified via CloudPrice API + AA (2026-10-01)
- **Modalities:** Text, image, video, PDF in; text out; reasoning supported (default effort); function calling; native structured outputs; prompt caching; Qwen3 tokenizer
- **Pricing (as of 2026-10-09):** Paid — $0.50 / 1M input, $3.00 / 1M output (Alibaba standard; batch $0.25/$1.50; OpenRouter $0.325/$1.95 ≤256K; Zen $0.50/$3.00, cache read $0.05). AA blended rate $0.43/1M.
- **Architecture:** Proprietary closed API tier; the open Qwen3.6 generation prioritizes stability/real-world utility on the Qwen3.5 foundation (Gated Delta Networks + sparse MoE). Parameter count for Plus: not disclosed. Output speed 56.0 tok/s (AA, slower than average); TTFT 2.13s.

### Raw benchmarks found

> Qwen's Qwen3.6-Plus blog tables via benchlm.ai (updated 2026-10-09) + AA and Vals rows. Previously-missing rows now measured.

Agent / tool use:

- Terminal-Bench 2.0: **61.6%** (Qwen blog — fills the previously-missing TB row); TB2.1 (Vals): 53.2%
- Tau2-bench: **97.7%** (AA via benchlm.ai — fills the previously-missing Tau row); Tau3-bench: **70.7%** (Qwen blog — fills)
- Claw-Eval: **58.8%** (Claw-Eval leaderboard via benchlm.ai — fills the previously-missing Claw row); QwenClawBench: **57.2%** (in-house)
- GDPval-AA: **1066 Elo** / 24.7% (AA — fills the previously-missing GDPval row)
- MCP Atlas: **48.2%**; MCP-Tasks: **74.1%**; WideResearch: **74.3%**; Toolathlon: **39.8%** (Qwen blog/benchlm.ai)
- VITA-Bench: 44.3%; DeepPlanning: 41.5%; Gert Labs: 50.6%; ResearchClawBench: 18.0% (benchlm.ai)
- Artificial Analysis Intelligence Index v4.3.2: **27.0** (corroborates the earlier 27 estimate — #70-class)

Reasoning / knowledge:

- GPQA: **90.4%** (Qwen blog — fills the previously-missing GPQA; AA-GPQA Diamond 88.2%; Vals 87.4%)
- HLE: **28.8%** (Qwen blog — fills the previously-missing HLE; AA-HLE 27.8%)
- AA-LCR: **78.3%** (AA long-context-reasoning board — fills the previously-missing LCR); LongBench v2: **62%**; AI-Needle: **68.3%** (Qwen blog)
- CritPt: **2.9%** (AA — weak)
- AIME26: **95.3%**; HMMT Feb 2026: **87.8%**; FrontierMath v2: T1–3 26.2%, T4 8.3% (benchlm.ai)
- MMLU-Pro: **88.5%** (Qwen blog; Vals 87.7%); MMLU-Redux 94.5%; C-Eval 93.3%; SuperGPQA 71.6%; AA-Omniscience hallucination rate **34.6%**
- IFEval: **94.3%**; IFBench: **75.8%**; AA-IFBench: **75.2%**

Coding:

- SWE-bench Verified: **78.8%** (Qwen blog — fills the previously-missing SWE-V row); SWE-bench (Vals): 73.4%
- LiveCodeBench v6: **87.1%** (Qwen blog — fills the previously-missing LCB); LiveCodeBench (Vals): **86.0%**
- SWE-bench Pro: **56.6%** (Qwen blog — fills); SWE Multilingual: **73.8%**
- Vibe Code Bench: **25.6%** (Vals v1.1 — weak); AA Coding Index: **54.5%** (AA)
- SciCode: no verified public score found

Long context:

- AA-LCR **78.3%** + LongBench v2 **62%** + AI-Needle **68.3%** measured (fills the previously-missing retrieval rows); 1M window documented by CloudPrice + AA

Multimodal / vision:

- MMMU: **86.0%**; MMMU-Pro: **78.8%**; MathVision: **88.0%**; VideoMMMU: **84.0%**; V*: **96.9%**; CharXiv: **81.5%**; ScreenSpot Pro: **68.2%** (Qwen multimodal comparison table via benchlm.ai — fills the previously-missing vision rows); AA-MMMU-Pro: **78.0%**; Design Arena Website: **1247**

### Normalized scores (1–100)

- **Tool use: 72/100.** Now measured: Tau2 97.7% (elite), TB2.0 61.6%, Claw-Eval 58.8%, WideResearch 74.3%, MCP-Tasks 74.1% and GDPval-AA 1066 clear mid-band anchors; MCP Atlas 48.2%, Toolathlon 39.8%, TB2.1 (Vals) 53.2% and AA Agentic 24.7% cap it.
- **Reasoning: 78/100.** GPQA 90.4% (filled — clears the 90% reference), AIME26 95.3% and AA-LCR 78.3% are strong; HLE 28.8% stays under the 40% bar, CritPt 2.9% is weak, and AA Index 27.0 caps it.
- **Context window: 93/100.** 1M tokens (≥1M band = 95–100) with measured AA-LCR 78.3%, LongBench v2 62% and AI-Needle 68.3% — strong for the tier but no ≥98% retrieval at 512K+; lands just under the ceiling.
- **Multimodal: 85/100.** Text + image + video (+PDF) input with measured vision (MMMU-Pro 78.8%, VideoMMMU 84.0%, MathVision 88.0%, V* 96.9%); text output only — mid 75–90 band.
- **Coding: 82/100.** Now with filled rows: SWE-V 78.8%, LCB 87.1%/86.0% (two harnesses), SWE-Pro 56.6%; Vibe 25.6% and AA Coding Index 54.5% hold it below frontier.
- **Cost efficiency: 92/100.** $0.50/$3.00 per 1M tokens on the evaluated tier (OpenRouter as low as $0.325/$1.95) — between the ~$0.60/$2.20 = ~92 and ~$0.10/$0.20 = 97–99 references.
- **Overall Score: 82/100.** Mean of the five quality dims (72 + 78 + 93 + 85 + 82) / 5 = 82.0. Best fit: cost-effective 1M-context multimodal work and mid-tier reasoning/coding — a strong price/performance pick, now superseded by Qwen3.7 Plus.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (benchlm.ai tables citing the Qwen3.6-Plus blog and AA/Vals boards, updated 2026-10-09; Artificial Analysis, CloudPrice, OpenCode Zen docs cross-checked); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: fills missing SWE-V 78.8%, LCB 87.1%, TB2.0 61.6%, Claw-Eval 58.8%, Tau2 97.7%, Tau3 70.7%, GDPval-AA 1066, GPQA 90.4%, HLE 28.8%, AA-LCR 78.3%, MMMU-Pro 78.8% — Tool 52→72, Reasoning 60→78, Multimodal 80→85, Coding 58→82, Overall 69→82.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7.md`, using the same headings.
