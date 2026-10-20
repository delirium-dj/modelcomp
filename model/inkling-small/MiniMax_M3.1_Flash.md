# Inkling-Small — findings by MiniMax M3.1 Flash

- Source: Thinking Machines Lab (`thinkingmachines/inkling-small`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling-Small
- **Short description:** Thinking Machines Lab's lighter open-weight sibling of **Inkling** (975B/41B active, scored in `model/Inkling/`): "Inkling-Small is a Mixture-of-Experts transformer with 276B total parameters, 12B active". It was **previewed on 2026-07-15** with Inkling ("alongside it we are sharing a preview of Inkling-Small, a lighter-weight model with 12B active parameters, trained with a similar recipe") and went **GA on 2026-07-30** ("we will release its full weights once that work is complete"). It is a **separate training run, not a resized or renamed Inkling** — and, per Thinking Machines, it benefited from Inkling: "Inkling-Small began training after its larger counterpart, which let us improve its training process", with "on-policy distillation with Inkling as the teacher" and "the same scalable post-training stack applied on top."
- **Provider / access:** Hugging Face `thinkingmachines/Inkling-Small` (Apache 2.0; BF16 and NVFP4 checkpoints; HF safetensors size 266B); OpenRouter `thinkingmachines/inkling-small` (canonical `…-20260730`); Tinker serverless. **Not on OpenCode Zen**, and **absent from models.dev** (which lists only `thinkingmachines/Inkling` and `Inkling:peft:262144`).
- **Release / knowledge:** preview 2026-07-15, **GA 2026-07-30**. Knowledge cutoff: **not published**. Rate limits: **none published**.
- **IDs:** `thinkingmachines/inkling-small` (OpenRouter), `thinkingmachines/Inkling-Small` (HF).
- **Context window:** up to **1M tokens**; OpenRouter lists **524,288** for its top provider and 1,048,576 on the free tier; BenchLM lists 1M; Tinker serves **64K and 256K**. Max output: OpenRouter 262,144; Vals 262k.
- **Modalities:** text + image + audio in, text out — the same encoder-free multimodal design as Inkling (dMel audio, 40×40-patch hMLP vision).
- **Reasoning controls:** hybrid/controllable effort (OpenRouter max/high/medium/low/minimal/none, default high; Tinker/AA label xhigh); the vendor's evaluation tables were run at **effort 0.99**.
- **Pricing (as of 2026-10-19, per 1M tokens):** OpenRouter **$0.45 in / $1.20 out / $0.10 cache read**; AA and Tinker serverless **$0.30 / $1.20 / $0.06**; Tinker training **$1.16 / $2.88**, halved to **$0.58 / $1.44** on promotion — the price BenchLM carries. Vendor: "Inkling output pricing is $4.05 / 1M tokens and Inkling-Small output pricing is $1.20 / 1M tokens".
- **Architecture:** MoE, **276B total / 12B active** (AA lists 266B); 42 layers; the same 6-of-256+2 routing as Inkling; Apache 2.0 licence.

### Raw benchmarks found

> The vendor launch table is marked "vendor" (effort 0.99); Artificial Analysis, Vals AI and the BenchLM ledger are independent. AA's launch-day index for Small was **40.0** versus Inkling's 41.0 (index v4.1.1).

Agent / tool use:

- Terminal-Bench 2.1: **64.7%** (vendor) / **55.1%** (Vals AI, via BenchLM)
- Terminal-Bench 4.0: **0.00%** (Vals AI) — no measurable agentic-terminal capability
- MCP Atlas: **79.6%** (vendor) / 79.2% (vendor's companion figure); Toolathlon-Verified **54.4%**; BrowseComp **77.4%**; τ³-Banking **15.5%**; GDPval-AA v2 **1269**; AA-Briefcase Elo **917**
- IFBench **82.2%**; SimpleQA Verified 20.6%; Omniscience index **-9.0**; AutomatationBench-AA not published for Small
- IPI / Claw-Eval / APEX-Agents: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **89.5%** (vendor) / **83.59%** (Vals AI) / 89.5% (via BenchLM)
- AIME 2026 **95.5%**; HMMT February 2026 **90.2%**; HLE **31.6%** text-only / **47.8%** with tools; CritPt **8.3%**
- FrontierMath v2: Tiers 1–3 **46.316%**, Tier 4 **17.073%** (Epoch AI, via BenchLM) — better than Inkling's 33.333% / 4.878%, and still weak
- Artificial Analysis Intelligence Index: **26** (#30/121) / 25.7 (OpenRouter mirror); Coding Index 53.0, Agentic Index 23.5; **189.2 t/s**, TTFT 1.79s
- Omniscience accuracy **33.2%** with hallucination **63.0%** (via BenchLM); MMLU-Pro 85.57% (Vals) / 85.6% (via BenchLM)

Coding:

- SWE-bench Verified: **80.2%** (vendor) / **82.20%** (Vals AI); SWE-bench Pro **55.9%**
- LiveCodeBench **85.93%** (Vals) / 85.9% (via BenchLM); Scientific Code Benchmark **48.7%**; Terminal-Bench 2.1 64.7%
- No DeepSWE figure published; ARC-AGI-2 **40.1%**; Critical Physics Tasks **8.3%**

Long context:

- **No MRCR, RULER, GraphWalks or needle-in-haystack measurement published.** "Up to 1M" is the only long-context statement; Tinker serves 64K/256K.

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 68/100.** MCP Atlas **79.6%** (the best in the Inkling family), Toolathlon-Verified 54.4%, BrowseComp 77.4%, τ³-Banking 15.5%, GDPval-AA 1269, AA-Briefcase 917, IFBench 82.2%. Capped by the rubric's anchors (TB2.1 ~88%+ → 64.7% vendor / 55.1% Vals; τ3 ~50%+ → 15.5%; GDPval ~1750+ → 1269), by **Terminal-Bench 4.0 at 0.00%**, by the absence of any Claw-Eval or IPI row, and by the ~10-point Terminal-Bench 2.1 spread between the vendor table and Vals.
- **Reasoning: 76/100.** AIME 2026 **95.5%**, HMMT February 2026 **90.2%**, GPQA Diamond 83.59–89.5%, IFBench 82.2%, FrontierMath v2 46.316% (T1–3) — better than the base Inkling's 33.333% — and 189.2 t/s with a 1.79s TTFT. Capped by FrontierMath Tier 4 at **17.073%**, by CritPt 8.3%, by the AA Intelligence Index of **26** (under the rubric's 60+ anchor), and by the low Omniscience accuracy (33.2% with 63.0% hallucination).
- **Context window: 94/100.** "Up to 1M" (vendor, BenchLM, AA), 524,288 on OpenRouter's paid route, 1,048,576 on the free tier, and Tinker serving 64K/256K — the rubric's top tier on the vendor's claim. One point below because the *deployed* context in Tinker's own catalogue is 64K/256K and **no long-context retrieval measurement exists** for this model.
- **Multimodal: 90/100.** Native encoder-free omni-modal input — text, image **and audio** — which is the rubric's "+audio in = 90–100" band, with measured support: Audio MC **54.9%**, MMAU 77.0%, **VoiceBench 90.1%**, FORTRESS adversarial 71.6% / benign 96.9%, CharXiv 77.4% / 81.3% with Python, MMMU-Pro 74.0%. It is one of only two models in this dataset that take audio at all.
- **Coding: 72/100.** SWE-bench Verified 80.2% (vendor) / 82.20% (Vals) — the best SWE-bench result in the Inkling family and slightly above the base model's 77.6% — SWE-bench Pro 55.9%, LiveCodeBench 85.93%, Scientific Code Benchmark 48.7%, Terminal-Bench 2.1 64.7%. Capped by the absence of any DeepSWE figure, by Terminal-Bench 4.0 at 0.00%, by Critical Physics Tasks 8.3%, by Scientific Code at 48.7%, and by ARC-AGI-2 at 40.1%.
- **Cost efficiency: 92/100.** The evaluated route is OpenRouter / Tinker serverless at **$0.30 in / $1.20 out** per 1M (OpenRouter lists $0.45/$1.20 for input), cache read $0.06, with the weights under **Apache 2.0** for free self-hosting. That sits below the rubric's "~$0.60/$2.20 ≈ 92" anchor and well below the "~$0.15/$0.20" top tier; the deductions are the 1.5× input premium on OpenRouter and the absence of any OpenCode Zen route, so the model cannot be used through this dataset's usual gateway.
- **Overall Score: 80.0/100.** (68 + 76 + 94 + 90 + 72) / 5 = 80.0 — best-fit: the **cheapest capable open omni-modal model with native audio** (Apache 2.0, 276B/12B active, $0.30/$1.20, 1M window) whose quality is *above* its bigger sibling on maths (FrontierMath 46.3% vs 33.3%) and SWE-bench (80.2% vs 77.6%) — but whose agentic-terminal capability is effectively nil (Terminal-Bench 4.0 0.00%), so it belongs in multimodal-understanding pipelines, not in agent harnesses.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **AA index — 26 (site) vs 25.7 (OpenRouter mirror)**, with a launch-day figure of **40.0** (index v4.1.1, versus Inkling's 41.0) — re-baselining, not a regression.
2. **Total parameters — 276B (vendor) vs 266B (AA and the HF safetensors size).** The vendor breakdown is used and both totals recorded.
3. **Input price — $0.45 (OpenRouter) vs $0.30 (AA and Tinker serverless).** Tinker's price is used for the evaluated route and the OpenRouter difference is flagged.
4. **GPQA Diamond — 89.5% (vendor) vs 83.59% (Vals) vs 89.5% (via BenchLM).** A 6-point spread; the independent reading is used for the cap.
5. **Terminal-Bench 2.1 — 64.7% (vendor) vs 55.1% (Vals).** Harness difference.
6. **SWE-bench Verified — 80.2% (vendor) vs 82.20% (Vals).** The independent run is higher here, the opposite of most models.
7. **FrontierMath v2 (46.316% / 17.073%) is better than the base Inkling's (33.333% / 4.878%)** — the smaller sibling is the stronger mathematician, which the vendor's distillation setup would predict; recorded as a genuine finding rather than a conflict.
8. **HLE is measured in two conditions** (text-only 31.6% vs with tools 47.8%); the AA/BenchLM labelling of 33.3% corresponds to the text-only reading.
9. **Context — "up to 1M" vs OpenRouter 524,288 (paid) / 1,048,576 (free) vs Tinker's 64K/256K.** The deployed limits are used for the score.
10. **No independent tracker has run Inkling-Small on the AA per-evaluation set beyond the mirror**, and no DeepSWE, Vals Terminal-Bench 2.1, or official Terminal-Bench 4.0 board row exists for it — the evidence base is thinner than for the base Inkling.

### Notes on identity

- `inkling-small` and `Inkling` are **two separate models of the same family with the same routing design and post-training stack** — the smaller one is a distinct training run (started after Inkling, improved by on-policy distillation from Inkling), not a quantized or renamed Inkling. The dataset's two folders therefore track two real models, not one model twice.
- Inkling-Small's lifecycle was preview (2026-07-15) → GA (2026-07-30) with the weights published only at GA; Inkling shipped weights from day one.
- Both are **Apache 2.0**, which makes them the most permissively licensed frontier-class models in this dataset (contrast Kimi K3, GLM-5.3-Flash, MiniMax M3 and Qwen3.8, all of which carry commercial-use restrictions).
- No OpenCode Zen row exists for either, and models.dev lists only the base Inkling — so this pair is reachable through OpenRouter/Tinker but not through the gateway this dataset normally uses.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Thinking Machines Lab's "Introducing Inkling-Small" post and model card, the Hugging Face repository, OpenRouter's API and model page, the Tinker serving/pricing documentation, Artificial Analysis (model page and index), the BenchLM evidence ledger and Vals AI, plus negative verification at OpenCode Zen, models.dev, swebench.com, ARC Prize, Epoch AI and LMArena. Vendor-vs-independent conflicts — the price split, the parameter-count and GPQA spreads and the AA re-baselining — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Inkling_Small.md`, using the same headings.
