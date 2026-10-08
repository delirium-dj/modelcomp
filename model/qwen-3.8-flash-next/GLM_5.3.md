# Qwen 3.8 Flash Next — findings by GLM 5.3

- Source: Alibaba (`qwen-3.8-flash-next`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Alibaba's open-weight experimental checkpoint of the Qwen3.8-Flash line (125B language params / 6B active), distinct from the managed Qwen3.8-Flash API model; strong agentic and multimodal numbers for its size at very low cost.
- **Provider / access:** Vercel AI Gateway `qwen/qwen3.8-flash-next` ($0.12/$0.40 per 1M); self-host via Hugging Face `Qwen/Qwen3.8-Flash-Next` (Qwen Community license). Project meta lists Zen ID `opencode/qwen-3.8-flash-next` (absent from the live Zen models list when re-checked 2026-10-08 — no Free ID).
- **Release / knowledge:** experimental preview checkpoint, 2026 (exact date not pinned on the model card); knowledge cutoff not disclosed.
- **IDs:** `opencode/qwen-3.8-flash-next` (project meta); Hugging Face `Qwen/Qwen3.8-Flash-Next`.
- **Context window:** 262,144 native (262K), extensible to 1M with YaRN (project meta + BenchLM 262K); scored at native 262K.
- **Modalities:** text, image, video in; text out; reasoning yes; tool use yes (Toolathlon/AndroidWorld results); JSON mode not verified.
- **Pricing (as of 2026-10-08):** Vercel $0.12 in / $0.40 out per 1M; open weights for free self-hosting under the Qwen Community license. No Zen Free ID.
- **Architecture:** 125B total language params / 6B active MoE, open weights, Qwen Community license (project meta; HF model card).

### Raw benchmarks found

Agent / tool use:

- AndroidWorld: **84.5%** (Qwen3.8-Flash-Next model card via BenchLM)
- CoWorkBench: **73.9%** (model card via BenchLM)
- Toolathlon-Verified: **73.5%** (model card via BenchLM)
- GDPval-AA: **1648** (56.6% normalized) (Artificial Analysis via BenchLM)
- JobBench: **55.7%** (model card via BenchLM)
- Agents' Last Exam: **51.2%** (model card via BenchLM)
- OSWorld 2.0: **19.4%** (model card via BenchLM)
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (model card) / **92.3%** (AA harness) (BenchLM)
- HLE: **35.9%** (model card) / **38.0%** (AA harness) (BenchLM)
- AA-LCR: **79.7%** (Artificial Analysis via BenchLM)
- CritPt: **11.1%** (AA via BenchLM)
- Artificial Analysis Intelligence Index: **39.8** (AA via BenchLM)
- AA-Omniscience Index: **-9.7** (accuracy 24.5%, hallucination rate 45.3%) (AA via BenchLM)

Coding:

- LiveCodeBench v6: **91.9%** (model card via BenchLM)
- SWE-bench Pro: **62.5%** (model card via BenchLM)
- SWE Multilingual: **81%** (model card via BenchLM)
- DeepSWE: **58.7%** (model card via BenchLM)
- AA Coding Index: **73.0%** (AA via BenchLM)
- AA-SciCode: **50.6%** (AA via BenchLM)
- NL2Repo: **48.1%** (model card via BenchLM)

Multimodal:

- LVBench (video): **76.6%** (model card via BenchLM)
- MathVision: **90.6%** (95.7% with Python) (model card via BenchLM)
- CharXiv: **90.6%** (84.6% without tools) (model card via BenchLM)
- RealWorldQA: **88.5%** (model card via BenchLM)
- AA-MMMU-Pro: **79.8%** (AA via BenchLM)
- ERQA: **72.3%** / Vision2Web: **64.0%** (model card via BenchLM)

Long context:

- 262K native window verified (BenchLM/project meta); no MRCR/RULER retrieval percentage published; AA-LCR 79.7% is the closest long-context reasoning proxy.

Instruction following:

- IFBench: **81.3%** (model card via BenchLM)

### Normalized scores (1–100)

- **Tool use: 82/100.** AndroidWorld 84.5%, Toolathlon 73.5% and CoWorkBench 73.9% with GDPval-AA 1648 near the 1750 frontier reference make a strong agentic profile; capped by OSWorld 2.0 19.4%, JobBench 55.7% and an experimental-preview status.
- **Reasoning: 84/100.** GPQA Diamond 91.7–92.3% clears the 90% frontier bar and HLE ~36–38% approaches the 40% reference, AA Index 39.8 well above the 20–35 mid band; capped by CritPt 11.1%, 45.3% hallucination rate (Omniscience -9.7) and AA-LCR below 95.
- **Context window: 72/100.** 262,144 native sits just above the 200K (=70) tier floor; YaRN 1M extension exists but no verified retrieval measurements at that length — scored at native 262K.
- **Multimodal: 85/100.** Video understanding verified by LVBench 76.6% plus chart/scene strength (CharXiv 90.6%, RealWorldQA 88.5%, MMMU-Pro 79.8%); capped by text-only output and no audio modality.
- **Coding: 78/100.** LiveCodeBench v6 91.9% and SWE Multilingual 81% are excellent; capped by SWE-bench Pro 62.5%, DeepSWE 58.7% (below the 74% ref) and SciCode 50.6% (below the 55% ref).
- **Cost efficiency: 96/100.** $0.12/$0.40 per 1M on Vercel undercuts the ~$0.10/$0.20 tier's 97–99 band only slightly, and open weights enable free self-hosting; experimental status is the only caveat.
- **Overall Score: 80/100.** (82 + 84 + 72 + 85 + 78) / 5 = 80.2 → 80. Best-fit recommendation: budget open-weights agentic + multimodal coding workhorse — near-frontier tool use and video understanding at flash pricing; keep a larger model for OS-world and long-context retrieval.

---

## Signature

- Provided by: **GLM 5.3 (zai/glm-5.3)** — 2026-10-08
- Method: public internet research (BenchLM aggregating the official model card and Artificial Analysis leaderboards, Vercel AI Gateway pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
