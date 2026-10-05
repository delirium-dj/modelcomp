# Kimi K2.7 Code — findings by GLM 5.3 Flash

- Source: Moonshot AI (`moonshotai/Kimi-K2.7-Code`, Modified MIT open weights)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's coding-focused agentic model built on Kimi K2.6 — a 1T-parameter (32B-active) MoE with substantial improvements on real-world long-horizon coding tasks, ~30% less thinking-token usage than K2.6, and forced preserve-thinking for multi-turn agent scenarios. Works best with Kimi Code CLI. The 2026-10-05 enrichment pass added the Vals AI / Artificial Analysis benchmark suite.
- **Provider / access:** Moonshot platform API (`https://platform.moonshot.ai`, OpenAI/Anthropic-compatible Chat Completions); kimi.com/code (Kimi Code CLI playground); open weights `moonshotai/Kimi-K2.7-Code` on Hugging Face/ModelScope; hosted via DeepInfra, Fireworks, Novita, Together. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-06-12; knowledge cutoff not disclosed.
- **IDs:** `moonshotai/Kimi-K2.7-Code` (Hugging Face); `kimi-k2.7-code` (hosted catalogs). No Free ID on Zen.
- **Context window:** 256K tokens (262,144; verified via the Hugging Face model card and llm-stats provider table); 262K in/out on DeepInfra/Moonshot (131K on Fireworks/Together).
- **Modalities:** text, image and video input (video is experimental and only supported on the official API); text output; reasoning yes — thinking mode forced (temperature 1.0, top-p 0.95 recommended) with preserve_thinking forced (cannot be disabled); tool calls with interleaved thinking and multi-step tool call; JSON mode.
- **Pricing (as of 2026-09-24):** $0.68 / $3.40 per 1M in/out via DeepInfra (cached input $0.136); Moonshot/Fireworks/Novita/Together $0.95 / $4.00 (cached $0.19). Open weights under Modified MIT (commercial use restricted); paid API.
- **Architecture:** Mixture-of-Experts 1T total / 32B active, 61 layers (1 dense), attention hidden 7168, MoE hidden 2048/expert, 64 attention heads, 384 experts (8 selected + 1 shared), MLA attention, SwiGLU, MoonViT vision encoder (400M), 160K vocabulary, native INT4 quantization; Modified MIT License.

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas: **76.0** (Moonshot model card, Kimi Code CLI, temp 1.0, 100 tool-call budget, avg of 3 runs; vs GPT-5.5's 79.4 and Opus 4.8's 81.3)
- MCPMark-Verified: **81.1** (human-verified MCPMark edition, 100-step budget; vs GPT-5.5's 92.9 and Opus 4.8's 76.4 — beats Opus 4.8)
- Terminal-Bench 2.1 (Vals AI): **67.0%** (benchlm.ai/models/kimi-k2-7-code, page updated 2026-10-05, sourcing Vals AI; TB2.1 67.04% corroborated on vals.ai) — fills the 2026-09-24 "no verified public score found" gap
- tau2-bench: **90.1%** (same source) — fills the marked gap
- GDPval-AA: **26.3%** (same source) — weak
- Kimi Claw 24/7 Bench: **46.9** (in-house long-horizon multi-day cowork benchmark, OpenClaw harness, 17 scenarios/610 points; vs GPT-5.5's 52.8 and Opus 4.8's 50.4)
- WildClawBench: **46.9** overall (internlm leaderboard, linked on the HF model card)
- Long-Horizon Terminal-Bench: **3 tasks solved** (IntelligenceLab leaderboard, linked on the HF card)
- Tau3: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.6** (Artificial Analysis via benchlm.ai, updated 2026-10-05) — fills the marked gap
- HLE: **35.0** (same source) — fills the marked gap
- Artificial Analysis Intelligence Index: **25.8** (same source) — fills the marked gap
- MLS-Bench Lite: **35.1** (official 30-task ML-methods-invention subset, 5h exploration; vs GPT-5.5's 35.5 and Opus 4.8's 42.8)
- LCR / MLCR, CritPt, Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench (Vals AI): **78.2%** (benchlm.ai, updated 2026-10-05, sourcing Vals AI) — fills the marked SWE-bench gap
- LiveCodeBench (Vals): **82.1%** (same source) — fills the marked gap
- AA-SciCode: **47.8%** (same source)
- Kimi Code Bench v2: **62.0** (in-house realistic coding-agent benchmark, 10+ languages; vs K2.6's 50.9, GPT-5.5's 69.0, Opus 4.8's 67.4)
- Program Bench: **53.6** (recreate a program's behavior from a compiled binary; vs K2.6's 48.3, GPT-5.5's 69.1, Opus 4.8's 63.8)
- SWE-bench Pro: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval value verified (256K window claimed; no MRCR/RULER value found)

### Normalized scores (1–100)

- **Tool use: 85/100.** MCPMark-Verified 81.1 (beats Opus 4.8's 76.4), MCP-Atlas 76.0, plus the new TB2.1 67.0 and tau2-bench 90.1 (Vals AI) — strong agentic-tool evidence; the weak GDPval 26.3 and trailing GPT-5.5/Opus 4.8 on MCP-Atlas keep it under 90.
- **Reasoning: 79/100.** The new AA rows resolve the old evidence dock: GPQA Diamond 89.6 is near-frontier, HLE 35.0 sits under the 40% bar, and the AA Intelligence Index 25.8 is low-mid — a strong-but-uneven profile landing just below the 80s.
- **Context window: 76/100.** 256K tokens maps to the 200K–500K tier (65–84, above the 200K=70 anchor); no measured retrieval at 512K+.
- **Multimodal: 82/100.** Image + video input (video experimental, official API only) with the MoonViT encoder; text-only output — the +video-in band is 75–90.
- **Coding: 83/100.** The Vals AI suite (SWE-bench 78.2%, LiveCodeBench 82.1%, AA-SciCode 47.8%) fills the old gaps and lifts the score above the in-house-only picture; still short of the top coding packages (GPT-5.5/Opus 4.8 lead the head-to-head rows).
- **Cost efficiency: 92/100.** $0.68/$3.40 per 1M (DeepInfra) sits at the ~$0.60/$2.20 = ~92 methodology reference; Moonshot's own $0.95/$4.00 is ~88; open weights as an extra lever.
- **Overall Score: 81.0/100.** Five-dim mean per `RULES.md` (Cost excluded): (85 + 79 + 76 + 82 + 83) / 5 = 405/5 = 81.0. Best-fit: a cost-efficient open-weight agent worker for MCP-based tool stacks and multi-day coworking tasks — the Vals/AA suite confirms genuinely strong coding and near-frontier GPQA behind the old thin-evidence discount.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-05
- Method: public internet research (2026-09-24 pass: Hugging Face model card with full evaluation tables, llm-stats model page; 2026-10-05 approved enrichment pass: benchlm.ai/models/kimi-k2-7-code updated 2026-10-05 sourcing Vals AI and Artificial Analysis, vals.ai corroboration); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K2.md`, using the same headings.
