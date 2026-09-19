# DeepSeek V4.1 Flash — findings by Grok 4.6

- Source: DeepSeek / DeepSeek-V4.1-Flash (`deepseek-flash`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** September 2026 DeepSeek Flash: 552B-backbone multimodal MoE (8B active on encode / 16B on generate) with native image+text, 1M context, MIT weights. Replaces V4 Flash / V4 Flash Vision Exp; from 2026-09-14 `deepseek-v4-pro` traffic is routed here until V4.1 Pro ships.
- **Provider / access:** DeepSeek OpenAI-compatible API `https://api.deepseek.com`, model `deepseek-flash` (Chat Completions). Weights: `deepseek-ai/DeepSeek-V4.1-Flash` on Hugging Face. Thinking on by default (low/medium/max).
- **Release / knowledge:** Released 2026-09-10. Knowledge cutoff **no verified public date found**.
- **IDs:** `deepseek/deepseek-flash` (API); HF `deepseek-ai/DeepSeek-V4.1-Flash`. No OpenCode Zen Free ID found.
- **Context window:** Up to **1M** tokens; max output **384K** (third-party recaps of the card). Agentic evals on the card use 1M; visual-agent evals 512K.
- **Modalities:** Native **image + text in**, text out. Tool / function calling. No public audio/video I/O on the HF card.
- **Pricing (as of 2026-09-19):** Per 1M tokens — cache hit $0.003 / $0.006 (off-peak / peak); cache miss $0.15 / $0.30; output $0.60 / $1.20. Peak = weekdays 01:00–04:00 and 06:00–10:00 UTC. Paid (very cheap).
- **Architecture:** Causal encoder-decoder MoE; **552B** backbone + **196B** Engram conditional memory cited by recaps; MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (**DeepSeek card**, DSH Minimal, 1M): **90.6%** (mini-SWE **90.3%**; Claude Code **88.0%**)
- Terminal-Bench 3.0 / 4.0 (**vendor**): **30.0% / 31.2%**; **AA TB v4.0: 27%**
- Tau3-Banking: **no verified public score found**
- GDPval-AA v2 (**AA**, max): **1,632 Elo**
- AA-Briefcase: **1,424 Elo**
- AutomationBench-AA: **69%** (vendor AutomationBench **54.8%**)
- Claw-Eval / ClawProBench: **no verified public score found**
- Agent’s Last Exam (**vendor**): **31.8%**

Reasoning / knowledge:

- GPQA Diamond (**vendor**): **90.9%**
- HLE Pass@1: **36.8** (full); **39.1†** text-only subset; **AA HLE 39%**; with-tools **63.9** in some recaps
- CritPt (**AA**): **14%**
- Artificial Analysis Intelligence Index v4.3: **40**
- AA-LCR v1.1: **84%**
- AA-Omniscience: **−5** (AA comparison page)
- MathArena Apex: **65.6%**; Codeforces rating **3471** (vendor)

Coding:

- DeepSWE v1.1 (**vendor**, mini-SWE): **74.2%** (Codex harness **65.6%**; Claude Code **69.8%**)
- SciCode (**AA**): **52%**
- SWE-bench Verified / Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- NL2Repo-Bench (**vendor**): **64.0%**

Long context:

- Official **1M**. AA-LCR v1.1 **84%**. **no MRCR / RULER / GraphWalks** figure found.

### Normalized scores (1–100)

- **Tool use: 90/100.** Vendor TB 2.1 90.6% meets the ~88% frontier ref; AA GDPval 1,632 is below ~1750 but above mid. Caps: TB 4.0 ~27–31%; no Tau3/Claw; vendor agent numbers use DeepSeek Harness.
- **Reasoning: 84/100.** GPQA 90.9% is frontier; HLE ~37–39% sits on the 40% line; AA Index 40 is below 60+. Caps: CritPt 14%; Omniscience −5; trails V4 Pro on GPQA.
- **Context window: 96/100.** 1M maps to 95–100; LCR 84% is strong but not ≥98% at 512K+.
- **Multimodal: 68/100.** Native image in / text out (60–70 band). Caps: no video/audio; GDP.pdf 13% on AA.
- **Coding: 90/100.** DeepSWE 74.2% matches the 74%+ frontier ref; TB 2.1 90.6% agrees. Caps: SciCode 52%; no SWE-bench Verified; DeepSWE drops to ~66% on Codex.
- **Cost efficiency: 95/100.** Peak $0.30/$1.20 is near the $0.60/$2.20 (~92) band; off-peak $0.15/$0.60 is closer to $0.10/$0.20 (97–99). Cache hits are essentially free.
- **Overall Score: 85.6/100.** Mean of 90, 84, 96, 68, 90. Best fit: default cheap open-weight coding agent with vision; not the knowledge/HLE leader.

---

## Signature

- Provided by: **Grok 4.6 (xAI/grok-4.6)** — 2026-09-19
- Method: Public internet research (Hugging Face model card, Artificial Analysis, API recaps); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
