# Kimi K3 — findings by Ernie 5.5 Flash

- Source: Moonshot AI/Kimi K3 (`kimi-k3`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's open-weight multimodal Kimi model (released 2026-07-16) with a 1M context and toggleable max-effort thinking for long-horizon agent work. The predecessor of K3.1 Pro.
- **Provider / access:** Moonshot AI API (`kimi-k3`), OpenRouter (`moonshotai/kimi-k3`), DeepInfra, NVIDIA NIM (`nvidia/moonshotai/kimi-k3`), OpenCode Go, plus ~80 routes. Open weights published.
- **Release / knowledge:** 2026-07-16 (models.dev); knowledge cutoff not published.
- **IDs:** `kimi-k3`, `moonshotai/kimi-k3`, `moonshotai/Kimi-K3`, `opencode-go/kimi-k3`.
- **Context window:** 1,048,576 tokens total; max output 131,072.
- **Modalities:** text, image and video in; text out; toggleable max-effort thinking and tool calls.
- **Pricing (as of 2026-11-11):** $3.00 / $15.00 per 1M input/output on Moonshot/OpenRouter; NVIDIA's free NIM route is catalogued at $0/$0 (rate-limited free endpoint). DeepInfra lists $2.85/$14.25.
- **Architecture:** open-weights MoE (moonshotai; config in the Hugging Face repo).

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **84.2%**; Toolathlon-Verified: **73.2%**
- Terminal-Bench 2.1: **88.3%** (Vals AI run **80.9%**); AutomationBench: **30.8%**
- BrowseComp: **91.2%**; JobBench: **52.9%**
- Terminal-Bench 4.x / OSWorld 2.x: no verified public rows published

Reasoning / knowledge:

- MLS-Bench Lite: **48.3%**; ProgramBench: **77.8%**
- HLE / GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published for K3
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- SWE-bench (Vals AI): **93.4%** — best verified coding row for this model
- FrontierSWE: **81.2%**; LiveCodeBench (Vals AI): **87.2%**; VulcanBench v3: **73.7%**
- DeepSWE: **67.5%**; Kimi Code Bench v2: **72.9%**; ProgramBench: **77.8%**
- FrontierSWE v2: **25.9%**; FrontierCode 2.0: **17.7%**; sweMarathon: **42%**; PostTrainBench v1.1: **32.0%**
- OpenHarmony Bench v1.0: **57.3%**; MLS-Bench Lite: **48.3%**; Bug Hunt Bench: **21.0 fixes**

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 85/100.** MCP Atlas 84.2% and Toolathlon 73.2% are strong, TB2.1 88.3% and BrowseComp 91.2% competitive; AutomationBench 30.8% and the absence of any Terminal-Bench 4.x row cap it.
- **Reasoning: 80/100.** Almost no public reasoning benchmarks exist for K3 (MLS-Bench Lite 48.3% is the only row); the score is a low-confidence inference from its agentic results.
- **Context window: 100/100.** 1,048,576 tokens with 131,072 max output.
- **Multimodal: 75/100.** Text, image and video in, but no public image/video understanding benchmark rows were published.
- **Coding: 82/100.** SWE-bench (Vals) 93.4% and FrontierSWE 81.2% are excellent, DeepSWE 67.5% good; FrontierSWE v2 25.9% and FrontierCode 2.0 17.7% show the newest harnesses are a problem.
- **Cost efficiency: 80/100.** $3/$15 per 1M is mid-premium, but the free NVIDIA NIM endpoint and open weights make it far cheaper to self-host.
- **Overall Score: 84.4/100.** Best fit for self-hosted, long-context agentic work where open weights matter; superseded by K3.1 Pro on every measured axis at lower cost.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Moonshot AI model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Kimi K3 — Moonshot AI / Hugging Face](https://huggingface.co/moonshotai/Kimi-K3)
  - [Kimi K3 benchmarks & sources — BenchLM](https://benchlm.ai/models/kimi-k3)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Kimi_K3_v2.md`, using the same headings.