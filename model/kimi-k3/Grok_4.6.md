# Kimi K3 — findings by Grok 4.6

- Source: Moonshot AI (`moonshotai/kimi-k3`; OpenCode Zen `opencode/kimi-k3`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI’s open-weight 2.8T-parameter (104B active) MoE flagship with native vision, 1M context, and Kimi Delta Attention + Attention Residuals. Distinct from Kimi K2.5 / K2.6 / K2.7 Code.
- **Provider / access:** Moonshot API `https://api.moonshot.ai/v1` id `kimi-k3`; OpenCode Zen Chat Completions `https://opencode.ai/zen/v1/chat/completions` id `kimi-k3` (`opencode/kimi-k3`). OpenRouter `moonshotai/kimi-k3`.
- **Release / knowledge:** Weights/tech blog ~**July 2026** (OpenCode data “Release Jul 2026”; arXiv 2607.24653). Knowledge cutoff not published.
- **IDs:** `moonshotai/kimi-k3`; Zen `opencode/kimi-k3`. No Zen Free ID (paid $3/$15).
- **Context window:** 1,048,576 total / 131,072 max output (models.dev / Zen calculator).
- **Modalities:** Native text + image + video in (MoonViT-V2); text out. Audio is mentioned in video-edit demos, not a documented standalone audio I/O modality. Tools, structured output, reasoning effort levels (low–max).
- **Pricing (as of 2026-09-19):** **$3.00 / $0.30 cached / $15.00** per 1M (Moonshot blog, Zen docs). Paid.
- **Architecture:** Open weights under **Kimi K3 License** (not MIT). 2.8T total / 104B active, Stable LatentMoE 16-of-896 experts.

### Raw benchmarks found

> Vendor GitHub/arXiv (max, mixed harnesses, AA cites as of 2026-07-23) vs OpenRouter AA max rows.

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Kimi Code harness, GitHub).
- Tau3-Banking: **33.4%** (AA / BenchLM snapshot; K3 #1 in that July table).
- GDPval-AA v2: **1686 Elo** (GitHub/arXiv).
- OSWorld-Verified: **84.8%**; OSWorld 2.0: **58.3%** (GitHub).
- Toolathlon-Verified: **76.5%**; MCP-Atlas: **84.2%**; MCPMark-Verified: **94.5%** (GitHub).
- Claw-Eval / ClawProBench: **no verified public score found**.
- AutomationBench: **30.8%** (GitHub).

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (GitHub; OpenRouter AA max same).
- HLE-Full: **43.5 / 56.0** (GitHub two-number row); OpenRouter AA-HLE max **46.9%**.
- LCR / MLCR: AA-LCR **74.7%** (GitHub, AA cite) vs OpenRouter max **88.7%** — harness/date split. MRCR: **no verified public score found**.
- CritPt: **23.4%** (GitHub / OpenRouter max).
- Artificial Analysis Intelligence Index: **57.1** v4.1 (arXiv, #4/580); OpenRouter lists max **43.8** on a later/different AA scale — prefer 57.1 from the paper’s v4.1 table.
- Omniscience Accuracy: OpenRouter max **47.6%**; non-hallucination rate **46.8%** (not the AA “hallucination rate” pair — no verified Accuracy/Hallucination Rate pair in the GitHub card).

Coding:

- SWE-bench Verified: **no verified public score found**. FrontierSWE **81.2%**; SWE-Marathon **42.0%**.
- LiveCodeBench: **no verified public score found**.
- SciCode: **58.7%** (GitHub) / **59.5%** (OpenRouter AA max).
- Vibe Code Bench: **no verified public score found**.
- DeepSWE v1.1: **67.5%** Kimi Code harness; **67.3%** mini-SWE-agent official board (GitHub footnote).
- AA Coding Index: OpenRouter max **76.2**.

Long context:

- 1M native window; AA-LCR **74.7–88.7%** depending on source. **No MRCR / RULER / GraphWalks ≥98% at 512K+ found.**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Overall Score = mean of the five quality dimensions; Cost excluded.

- **Tool use: 88/100.** TB2.1 88.3% is on the ~88%+ frontier ref; Toolathlon 76.5% and MCP-Atlas 84.2% are strong. Caps: Tau3 33.4% well under ~50%+, GDPval 1686 vs ~1750+, AutomationBench 30.8%, missing Claw-Eval.
- **Reasoning: 90/100.** GPQA 93.5% and HLE ~44–47% (tools row 56%) meet GPQA 90%+ / HLE 40%+; Index 57.1 is just under the 60+ band. Caps: CritPt 23.4%, Index not 60+.
- **Context window: 95/100.** 1,048,576 maps to ≥1M (95–100); 100 needs ≥98% retrieval at 512K+, which is unpublished (AA-LCR is not MRCR).
- **Multimodal: 82/100.** Native image + video in, text out maps to +video/PDF 75–90. No documented standalone audio I/O, so not 90–100.
- **Coding: 82/100.** SciCode ~59% is frontier-ish (55%+); DeepSWE 67.3–67.5% is below the 74%+ ref, so this is mid-high not 90–100. TB 88.3% and Coding Index 76.2 pull up; missing SWE-Verified/LiveCode.
- **Cost efficiency: 60/100.** **$3 / $15** matches the methodology $3/$15 ≈60 band. Cache $0.30 helps but list price is paid, not $0.
- **Overall Score: 87/100.** Mean of (88 + 90 + 95 + 82 + 82) / 5 = 87.4 → **87**. Best-fit: open 1M-context vision/video agent when you can run Kimi Code harness; not the cheapest and Tau3/DeepSWE trail closed flagships.

---

## Signature

- Provided by: **Grok 4.6 (xAI/grok-4.6)** — 2026-09-19
- Method: public internet research (Moonshot GitHub/blog, arXiv 2607.24653, OpenRouter AA tables, OpenCode Zen docs, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
