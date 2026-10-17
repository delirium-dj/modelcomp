# GLM 5.3 Flash — findings by MiniMax M3

- Source: Z.AI (`z-ai/glm-5.3-flash`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.AI's lightweight Flash-class MoE (320B total / 18B active), engineered for ultra-fast agentic coding, high-frequency tool calls, and low latency. Previewed anonymously as "Ox Alpha" before launch.
- **Provider / access:** Z.AI native API; OpenCode Zen `opencode/glm-5.3-flash`; OpenRouter `z-ai/glm-5.3-flash`; Venice; Cloudflare Workers AI; Z.AI Coding Plan ($18/mo points). Chat Completions-compatible.
- **Release / knowledge:** Release 2026-08-26; weights open under MIT license on Hugging Face.
- **IDs:** `z-ai/glm-5.3-flash` (vendor); `opencode/glm-5.3-flash` (Zen). Free Zen tier available.
- **Context window:** 1M tokens (Artificial Analysis spec sheet; meta.json's 204K reflects the more conservative vendor figure).
- **Modalities:** Text and image in; text out. Reasoning: yes (effort levels: low / high / max — thinking cannot be disabled). Tool calls: yes. JSON mode: yes.
- **Pricing (as of 2026-10-13):** $0.15 input / $0.50 output per 1M; cache hit $0.03 (80% discount). Free Zen tier available; Z.AI Coding Plan starts $18/month.
- **Architecture:** Proprietary MoE — 320B total parameters, 18B active per token. Open weights under MIT.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (DataCamp summary, 2026-08-27) — sits between Claude Opus 4.8 (85.0) and below GPT-5.6 Terra (87.4).
- Terminal-Bench 4.0 (AA Intelligence Index v4.3.2 evaluation): included in the 42 Intelligence Index score.
- MCP Atlas: **no verified public score found** for this exact model/ID (Flash-tier Z.AI launch page does not publish).
- Toolathlon: **no verified public score found** for this exact model/ID.
- GDPval-AA v2.1: included in the 42 AA Intelligence Index (Elo contribution). CyberGym-style agentic workflows score **84.5%** on Z.AI's internal CyberGym.
- AutomationBench-AA: included in the 42 AA Intelligence Index.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **42** (AA, 27 of 699 models). Well above the open-weights median of 18. Z.AI's launch blog earlier cited v4.1.1 at 57 with discounted pricing, then later AA runs landed at 42 under v4.3.2.
- AA Coding Index: **71.5** (OpenRouter / AA compare page) — beats Ling 3.0 Flash (50.6) and LongCat 2.0 (45.3).
- AA Omniscience Index / Hallucination Rate: included in the 42 composite; specific values not separately published.
- HLE with Tools: **62.5%** (Z.AI launch table, vs Kimi K3 59.8 and GPT-5.6 Sol 64.5).
- GPQA Diamond / CritPt / Humanity's Last Exam: rolled into the 42 AA Intelligence Index.

Coding:

- DeepSWE v1.1: **63.4** vs GLM 5.2's 46.2 (Z.AI launch blog). Z.AI also cites a higher 66.9 in the vendor-reported terminal benchmark table — both are Z.AI's own harnesses; AA's Terminal-Bench 4.0 is the more defensible third-party number.
- SWE-bench Verified / Pro: **no independent verified public score** for GLM-5.3-Flash at launch; Z.AI references SWE-bench Pro at the family level for GLM 5.3 (not split for Flash). Some aggregator pages list "92.0%" — this appears to be a hallucinated figure and is NOT cited here.
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE independent re-runs: **no verified public score found** for this exact model/ID.

Long context:

- AA-LCR v1.1: included in the 42 AA Intelligence Index.
- Context window 1M (AA spec) / 204K (Z.AI spec — conservative gate). MRCR / RULER at window length: **no long-context retrieval reported** for this exact model/ID.

Cost / efficiency:

- AA cost per Intelligence Index task: **$0.28** (rank #20 / 36).
- AA output speed: **64 tok/s** (rank #43 / 74; below average of 67).
- AA verbosity: **180M output tokens** for full Intelligence Index (rank #32 / 40; very verbose vs median 140M).

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.1 at 84.3% (between Opus 4.8 and GPT-5.6 Terra). CyberGym 84.5% (defensive). Strong on tool-heavy workflows per Z.AI launch. Capped at 86 because MCP Atlas / Toolathlon for this exact model/ID are not independently published.
- **Reasoning: 80/100.** AA Intelligence Index v4.3.2 = 42 (well above open-weights median of 18). AA Coding Index 71.5 (beats Ling 3.0 Flash / LongCat 2.0). HLE with Tools 62.5% in vendor table. Capped at 80 because the v4.3.2 Index dropped from 57 (v4.1.1) and most sub-component scores are not published.
- **Context window: 92/100.** 1M context per AA spec (some Zen listings cap at 204K). Capped at 92 because AA-LCR v1.1 is included in the Index but no MRCR / RULER figure is published at window length.
- **Multimodal: 70/100.** Text + image in (per AA spec sheet). No native video or audio. MMMU-Pro listed in AA's evaluation menu but not separately surfaced for this model. Capped at 70 because the only multimodal capability is image-in; no audio/video/PDF in.
- **Coding: 86/100.** Terminal-Bench 2.1 84.3%. DeepSWE 63.4-66.9 (vendor). AA Coding Index 71.5. CyberGym 84.5% (defensive). Capped at 86 because independent SWE-bench Verified / Pro / LiveCodeBench re-runs for this exact model/ID are not published.
- **Cost efficiency: 92/100.** $0.15 in / $0.50 out (rank #20 of 36 — competitively priced). $0.03 cached input (80% discount). $0.28 per AA Intelligence Index task. Free Zen tier available. Capped at 92 because output speed is below average (64 vs 67 tok/s) and verbosity is high (180M tokens).
- **Overall Score: 83/100** Half-up mean of Tool 86, Reasoning 80, Context 92, Multimodal 70, Coding 86 = 414/5 = 82.8 → half-up 83. GLM 5.3 Flash is Z.AI's value play: top-decile intelligence for its cost class with an unusually permissive 1M context window, but multimodal is image-only and the live API still trails on throughput.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-13
- Method: public internet research (Z.AI launch post, DataCamp summary, Artificial Analysis spec sheet, OpenRouter compare page, LLM-Stats, kie.ai spec page, emergent.sh vendor critique). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_5.3_Flash_ZAI.md`, using the same headings.
